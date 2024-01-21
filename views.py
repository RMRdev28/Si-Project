from django.shortcuts import render, get_object_or_404
from django.db.models import Sum, F
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime
from .models import Utilisateur, Centre, Employe, Fournisseur, Client, Achat, Vente, Produit, Transfert, Versement, MasAbs, Login, Notification
from .serializers import ProduitSerializer, UtilisateurSerializer, CentreSerializer, EmployeSerializer, ClientSerializer, FournisseurSerializer, AchatSerializer, VentesSerializer, VersementSerializer,TransferSerializer, NotificationSerializer, InsertAchatSeriaizer,IUtilisateurSerializer,IEmployeSerializer, InsertVenteSeriaizer,MasAbsSerializer
# Create your views here.

#listing

@api_view(['GET'])
def get_all_products(request):
    products = Produit.objects.filter(trashP = 0)
    serializer = ProduitSerializer(products, many=True)  
    return Response({"produits": serializer.data})

@api_view(['GET'])
def get_all_products_all(request):
    products = Produit.objects.all()
    serializer = ProduitSerializer(products, many=True)  
    return Response({"produits": serializer.data})

@api_view(['GET'])
def get_all_users(request):
    users = Utilisateur.objects.all()
    serializer = UtilisateurSerializer(users, many=True)  
    return Response({"utilisateurs": serializer.data})

@api_view(['GET'])
def get_all_emps(request):
    emps = Employe.objects.all()
    serializer = EmployeSerializer(emps, many=True)  
    return Response({"employes": serializer.data})

@api_view(['GET'])
def get_all_clients(request):
    clients = Client.objects.all()
    serializer = ClientSerializer(clients, many=True)  
    return Response({"clients": serializer.data})

@api_view(['GET'])
def get_all_abs_mas(request,id_emp):
    user = Utilisateur.objects.get(id=id_emp)
    employe = Employe.objects.get(employe=user)
    employe = MasAbs.objects.filter(empMA=employe)
    serializer = MasAbsSerializer(employe, many=True)  
    return Response({"data": serializer.data})

@api_view(['GET'])
def get_all_fournisseurs(request):
    fournisseurs = Fournisseur.objects.all()
    serializer = FournisseurSerializer(fournisseurs, many=True)  
    return Response({"fournisseurs": serializer.data})

@api_view(['GET'])
def get_all_centres(request):
    centres = Centre.objects.all()
    serializer = CentreSerializer(centres, many=True)  
    return Response({"centres": serializer.data})

@api_view(['GET'])
def get_all_achats(request):
    achats = Achat.objects.all()
    serializer = AchatSerializer(achats, many=True)  
    return Response({"achats": serializer.data})


@api_view(['GET'])
def get_all_ventes(request):
    ventes = Vente.objects.all()
    serializer = VentesSerializer(ventes, many=True)  
    return Response({"ventes": serializer.data})



@api_view(['GET'])
def get_versement_vente(request, id_vente):
    Versements = Versement.objects.filter(vente = id_vente)
    serializer = VersementSerializer(Versements, many=True)  
    return Response({"versements": serializer.data})

@api_view(['GET'])
def get_versement_achat(request, id_vente):
    Versements = Versement.objects.filter(vente = id_vente)
    serializer = VersementSerializer(Versements, many=True)  
    return Response({"versements": serializer.data})

@api_view(['GET'])
def get_transfer_center(request, id_centre):
    transferts = Transfert.objects.filter(centreT = id_centre)
    serializer = TransferSerializer(transferts, many=True)  
    return Response({"Transfers": serializer.data})

@api_view(['GET'])
def get_salaire_mois(request, id_emp, mois, anne):
    employe = get_object_or_404(Employe, pk=id_emp)
    salaire_mensuel = employe.calculer_salaire_mensuel(mois, anne)

    context = {"data":{
        'employe_id': employe.id,
        'employe_nom': f"{employe.employe.nom} {employe.employe.prenom}",
        'salaire_mensuel': salaire_mensuel,
        'mois': mois,
        'annee': anne
    }}
    return Response(context)

@api_view(['GET'])
def get_user(request,id_user):
    user = Utilisateur.objects.get(id=id_user)
    if user.typeUtilisateur == "employe":
        emp = Employe.objects.get(employe=user)
        serializer = EmployeSerializer(emp,many=False)  
        return Response({"data": serializer.data})
    elif user.typeUtilisateur == "fournisseur":
        fournisseur = Fournisseur.objects.get(fournisseur=user)
        serializer = FournisseurSerializer(fournisseur,many=False)  
        return Response({"data": serializer.data})
    else:
        client = Client.objects.get(client=user)
        serializer = ClientSerializer(client,many=False)  
        return Response({"data": serializer.data})

@api_view(['GET'])
def get_dashboard_data(request):
    nbrEmploye  = Employe.objects.count()
    nbrProduit = Produit.objects.filter(trashP = 0).count()
    nbrAchat = Achat.objects.filter(trashA = 0).count()
    nbrVente = Vente.objects.filter(trashV = 0).count()
    benifice = 0
    vente = Vente.objects.filter(trashV = 0)
    for v in vente:
        benifice += v.prixV * v.qntV
    
    achat = Achat.objects.filter(trashA = 0)
    for a in achat:
        benifice -= a.prixA * a.qntA

    context = {
        "data":{
            "nbrEmploye":nbrEmploye,
            "nbrProduit":nbrProduit,
            "nbrAchat":nbrAchat,
            "nbrVente":nbrVente,
            "benifice":benifice
        }
    }
    return Response(context)


@api_view(['GET'])
def get_top_fournisseur(request):
    pass

@api_view(['GET'])
def get_top_client(request):
    pass

@api_view(['GET'])
def get_win(request):
    wins = []
    for i in range(12):
        benifice_month = 0
        vente = Vente.objects.filter(dateV__month = i+1, dateV__year = datetime.now().year,trashV = 0)
        achat = Achat.objects.filter(dateA__month = i+1, dateA__year = datetime.now().year,trashA = 0)
        for v in vente:
            benifice_month += v.prixV*v.qntV
        for a in achat:
            benifice_month -= a.prixA *a.qntA

        if benifice_month > 0 : wins.append(benifice_month) 
        
    return Response({"data":wins})


@api_view(['GET'])
def get_nbr_achat_vente(request):
    achat = []
    vente = []
    for i in range(12):
        benifice_month = 0
        venteR = Vente.objects.filter(dateV__month = i+1, dateV__year = datetime.now().year,trashV = 0).count()
        achatR = Achat.objects.filter(dateA__month = i+1, dateA__year = datetime.now().year,trashA = 0).count()
        vente.append(venteR)
        achat.append(achatR)
        
    return Response({"data":{
        "vente":vente,
        "achat":achat
    }})

@api_view(['GET'])
def get_top_fournisseur(request):

    top_fournisseurs = Achat.objects.filter(
        dateA__year=datetime.now().year, 
        dateA__month=datetime.now().month
    ).values(
        'fournisseurA'
    ).annotate(
        total_amount=Sum(F('prixA') * F('qntA'))
    ).order_by(
        '-total_amount'
    )[:5]

    
    fournisseur_ids = [f['fournisseurA'] for f in top_fournisseurs]
    fournisseurs = Fournisseur.objects.filter(id__in=fournisseur_ids)
    serializable = FournisseurSerializer(fournisseurs,many=True)
    return Response({"data":serializable.data})


@api_view(['GET'])
def get_top_client(request):

    top_client = Vente.objects.filter(
        dateV__year=datetime.now().year, 
        dateV__month=datetime.now().month
    ).values(
        'clientV'
    ).annotate(
        total_amount=Sum(F('prixV') * F('qntV'))
    ).order_by(
        '-total_amount'
    )[:5]

    
    client_ids = [f['clientV'] for f in top_client]
    fournisseurs = Client.objects.filter(id__in=client_ids)
    serializable = ClientSerializer(fournisseurs,many=True)
    return Response({"data":serializable.data})



@api_view(['GET'])
def get_sell_prd_mat(request):
    prd = []
    nbrprd = 0
    nbrmat = 0
    vente = Vente.objects.filter()
    for v in vente:
        if v.prdV.typeP == "matiere":
            nbrmat += 1
        else:
            nbrprd += 1

    prd.append(nbrprd)
    prd.append(nbrmat)
    return Response({"data":prd})


            


    

##inserting:

@api_view(['POST'])
def create_product(request):
    if request.method == 'POST':
        serializer = ProduitSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def create_centre(request):
    if request.method == 'POST':
        serializer = CentreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_user(request):
    if request.method == 'POST':
        center = request.data['centre']
        sallaire = request.data['sallaire']
        print(request.data)
        serializer = UtilisateurSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            data2 = {
                "employe":serializer.data['id'],
                "centre":center,
                "sallaire":sallaire
            }
            print(data2)
            serializer2 = IEmployeSerializer(data=data2)
            if serializer2.is_valid():
                print(serializer.errors)
                serializer2.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            
            print(serializer.errors)
        return Response(serializer2.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def create_fournisseur(request):
    if request.method == 'POST':
        serializer = FournisseurSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def create_Achat(request):
    if request.method == 'POST':
        serializer = InsertAchatSeriaizer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_Vente(request):
    if request.method == 'POST':
        serializer = InsertVenteSeriaizer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def create_Versement(request):
    if request.method == 'POST':
        serializer = VersementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def create_Transfert(request):
    if request.method == 'POST':
        serializer = TransferSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# @api_view(['POST'])
# def create_AbsMas(request):
#     if request.method == 'POST':
#         serializer =(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


@api_view(['POST'])
def update_employe(request):
    try:
        employe_id = request.data.get('id')
        if not employe_id:
            return Response({'error': 'Employe ID is required'}, status=status.HTTP_400_BAD_REQUEST)

        employe = Employe.objects.get(id=employe_id)

        utilisateur_data = request.data.get('employe')
        if utilisateur_data:
            Utilisateur.objects.filter(id=employe.employe.id).update(**utilisateur_data)

        # Update fields of Employe instance
        for key, value in request.data.items():
            if hasattr(employe, key):
                setattr(employe, key, value)
        employe.save()

        employe_serializer = EmployeSerializer(employe)
        return Response({"data":employe_serializer.data})

    except Employe.DoesNotExist:
        return Response({'error': 'Employe not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def update_product(request):
    try:
        produit_id = request.data.get('id')
        if not produit_id:
            return Response({'error': 'Produit ID is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        produit = Produit.objects.get(id=produit_id)
        produit_data = request.data.get('produit')
        if produit_data:
            Produit.objects.filter(id=produit.id).update(**produit_data)

        produit_serializer = ProduitSerializer(produit)
        return Response({"data":produit_serializer})

    except Produit.DoesNotExist:
        return Response({'error': 'Produit not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def delete_product(request, idP):
    try:
        # Fetch the product by id
        product = Produit.objects.get(id=idP)


        product.trashP = 1  
        product.save()

        # Return a success response
        return Response({"message": "Product deleted successfully."}, status=status.HTTP_200_OK)

    except Produit.DoesNotExist:
        # Return an error response if the product does not exist
        return Response({"error": "Product not found."}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        # Handle other possible exceptions
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def get_notifications(request):
    notifications = Notification.objects.all()
    serializer = NotificationSerializer(notifications, many=True)  
    return Response({"notifications": serializer.data})


@api_view(['GET'])
def markasread(request):
    Notification.objects.all().update(status=1)
    return Response({"data": "done"})




