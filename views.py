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
    users = Utilisateur.objects.filter(trashU=0)
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
def get_product_transfer(request,idP):
    product = Produit.objects.get(id = idP)
    transfert = Transfert.objects.filter(prdT = product)
    serializer = TransferSerializer(transfert,many=True)  
    return Response({"transfert": serializer.data})

@api_view(['GET'])
def get_all_centres(request):
    centres = Centre.objects.all()
    serializer = CentreSerializer(centres, many=True)  
    return Response({"centres": serializer.data})

@api_view(['GET'])
def get_versement_achat(request,idA):
    achat = Achat.objects.get(id=idA)
    versements = Versement.objects.filter(achat = achat)
    serializer = VersementSerializer(versements, many=True)  
    return Response({"versement": serializer.data})

@api_view(['GET'])
def get_versement_vente(request,idV):
    vente = Vente.objects.get(id=idV)
    versements = Versement.objects.filter(vente = vente)
    serializer = VersementSerializer(versements, many=True)  
    return Response({"versement": serializer.data})

@api_view(['GET'])
def get_all_achats(request):
    achats = Achat.objects.filter(trashA = 0)
    serializer = AchatSerializer(achats, many=True)  
    return Response({"achats": serializer.data})


@api_view(['GET'])
def get_all_ventes(request):
    ventes = Vente.objects.filter(trashV = 0)
    serializer = VentesSerializer(ventes, many=True)  
    return Response({"ventes": serializer.data})





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
def get_salaire_mois_actuelle(request,id_emp):
    user = Utilisateur.objects.get(id=id_emp)

    employe = Employe.objects.get(employe=user)
    salaire_mensuel = employe.calculer_salaire_mensuel(datetime.now().month, datetime.now().year)


    return Response({"data":salaire_mensuel})

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
def create_masrouf(request):
   user = Utilisateur.objects.get(id = request.data['empMA'])
   employe = Employe.objects.get(employe = user)
   print(employe)
   masrouf = MasAbs(dateMA = request.data['dateMA'],empMA = employe, montantMA = request.data['montantMA'],typeMA = "masrouf")
   masrouf.save()
   return Response({"done":"done"}) 

@api_view(['POST'])
def create_centre(request):
    if request.method == 'POST':
        serializer = CentreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def get_one_Product(request,idP):
        product = Produit.objects.get(id=idP)
        serializer = ProduitSerializer(product)
        return Response({"data":serializer.data}, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def employe_absent(request, idU):
    try:
        user = Utilisateur.objects.get(id=idU)
        employe = Employe.objects.get(employe=user)  # Assuming one-to-one relationship
    except (Utilisateur.DoesNotExist, Employe.DoesNotExist):
        return Response({"message": "Employe not found"}, status=status.HTTP_404_NOT_FOUND)

    today = datetime.now().date()
    existing_record = MasAbs.objects.filter(empMA=employe, dateMA=today, typeMA='abssence').first()

    if existing_record:
        return Response({"message": "Absence already recorded for today"}, status=status.HTTP_409_CONFLICT)
    
    new_absence = MasAbs.objects.create(
        dateMA=today,
        typeMA='abssence',
        empMA=employe
    )
    return Response({"message": "done"},status=status.HTTP_201_CREATED)


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
            achat = Achat.objects.get(id=serializer.data['id'])
            montant = Versement(achat=achat,montantVer=request.data['montantVer'])
            montant.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_Vente(request):
    if request.method == 'POST':
        serializer = InsertVenteSeriaizer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            vente = Vente.objects.get(id=serializer.data['id'])
            montant = Versement(vente=vente,montantVer=request.data['montantVer'])
            montant.save()
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
    try:
        product = Produit.objects.get(id=request.data['prdT'])
        centre = Centre.objects.get(id=request.data['centreT'])
    except (Produit.DoesNotExist, Centre.DoesNotExist) as e:
        return Response({"message": str(e)}, status=status.HTTP_404_NOT_FOUND)

    transfert = Transfert(prdT=product, centreT=centre, qntT=request.data['qntT'], dateT=request.data['dateT'])

    try:
        transfert.save()
        product.qntEnStock -= int(transfert.qntT)
        product.save()
        if product.qntEnStock <= 10:
            notification = Notification(status=0, prd=product)
            notification.save()
        return Response({"message": "done"}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"message": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
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
        produit_id = request.data['id']
        if not produit_id:
            return Response({'error': 'Produit ID is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        produit = Produit.objects.get(id=produit_id)
        produit.desigP = request.data['desigP']
        produit.descP = request.data['descP']
        produit.typeP = request.data['typeP']
        produit.save()

        
        return Response({"done":"done"})

    except Produit.DoesNotExist:
        return Response({'error': 'Produit not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def detail_vente(request, idV):
    vente = Vente.objects.get(id = idV)
    versement = Versement.objects.filter(vente=vente)

    #calclue le reset 
    totalVente = vente.prixV * int(vente.qntV)
    reste = 0
    for v in versement:
        reste+=v.montantVer
     
    reste = totalVente - reste
    serializer = VersementSerializer(versement, many=True)
    return Response({"data":serializer.data,"reste":reste})


@api_view(['GET'])
def detail_achat(request, idA):
    achat = Achat.objects.get(id = idA)
    versement = Versement.objects.filter(achat=achat)

    #calclue le reset 
    totalVente = achat.prixA * int(achat.qntA)
    reste = 0
    for v in versement:
        reste+=v.montantVer
     
    reste = totalVente - reste
    serializer = VersementSerializer(versement, many=True)
    return Response({"data":serializer.data,"reste":reste})

@api_view(['POST'])
def create_versemnt(request):
    montant = request.data['montantVer']
    if request.data['achat']:
        achat = Achat.objects.get(id = request.data['achat'])
        versment = Versement(montantVer=montant,achat=achat)
        versment.save()
        return Response({"done":"done"})
    elif request.data['vente']:
        vente = Vente.objects.get(id=request.data['vente'])
        versment = Versement(montantVer = montant, vente = vente)
        versment.save()
        return Response({"done":"done"})
    else:
        return Response({"error":"error"})






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



@api_view(['GET'])
def delete_user(request, idU):
    try:
        
        user = Utilisateur.objects.get(id=idU)


        user.trashU = 1  
        user.save()

        # Return a success response
        return Response({"message": "Product deleted successfully."}, status=status.HTTP_200_OK)

    except Utilisateur.DoesNotExist:
        # Return an error response if the product does not exist
        return Response({"error": "Product not found."}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        # Handle other possible exceptions
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

@api_view(['GET'])
def delete_vente(request, idV):
    try:
        
        vente = Vente.objects.get(id=idV)


        vente.trashV = 1  
        if vente.save() :
            produit = Produit.objects.get(id=vente.prdV.id)
            produit.qntEnStock += vente.qntV
            produit.save()

        # Return a success response
        return Response({"message": "Product deleted successfully."}, status=status.HTTP_200_OK)

    except Vente.DoesNotExist:
        # Return an error response if the product does not exist
        return Response({"error": "Product not found."}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        # Handle other possible exceptions
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def delete_achat(request, idA):
    try:
        
        achat = Achat.objects.get(id=idA)


        achat.trashA = 1  
        if achat.save() :
            produit = Produit.objects.get(id=achat.prdA.id)
            produit.qntEnStock -= achat.qntA
            produit.save()

        # Return a success response
        return Response({"message": "Product deleted successfully."}, status=status.HTTP_200_OK)

    except Vente.DoesNotExist:
        # Return an error response if the product does not exist
        return Response({"error": "Product not found."}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        # Handle other possible exceptions
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)