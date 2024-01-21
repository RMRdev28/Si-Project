from rest_framework import serializers
from .models import Utilisateur, Centre, Employe, Fournisseur, Client, Achat, Vente, Produit, Transfert, Versement, MasAbs, Login, Notification

##Listing

class ProduitSerializer(serializers.ModelSerializer):

    class Meta:
        model = Produit
        fields = "__all__"

class NotificationSerializer(serializers.ModelSerializer):
    prd = ProduitSerializer(read_only = True)
    class Meta:
        model = Notification
        fields = "__all__"




## User serializers
class UtilisateurSerializer(serializers.ModelSerializer):

    class Meta:
        model = Utilisateur
        fields = "__all__"
    
class IUtilisateurSerializer(serializers.ModelSerializer):

    class Meta:
        model = Utilisateur
        fields = "__all__"

    # fields and Meta class here

    def save(self, center=None, sallaire=None,**kwargs):
        
        instance = self.instance or self.Meta.model()  # Get or create the model instance
        instance.center = center  # Set extra attributes
        instance.sallaire = sallaire

        super(IUtilisateurSerializer, self).save(**kwargs)  
        print(center)# Save the instance
        return instance
    


class EmployeSerializer(serializers.ModelSerializer):
    employe = UtilisateurSerializer(read_only=True)

    class Meta:
        model = Employe
        fields = "__all__"

class IEmployeSerializer(serializers.ModelSerializer):
    employe = serializers.PrimaryKeyRelatedField(queryset=Utilisateur.objects.all())
    centre = serializers.PrimaryKeyRelatedField(queryset=Centre.objects.all())

    class Meta:
        model = Employe
        fields = "__all__"


class FournisseurSerializer(serializers.ModelSerializer):
    fournisseur = UtilisateurSerializer()
    class Meta:
        model = Fournisseur
        fields = "__all__"
        
    def create(self, validated_data):
        utilisateur_data = validated_data.pop('fournisseur')
        utilisateur_data = validated_data.pop('employe')
        utilisateur_data = validated_data.pop('client')
        utilisateur = Utilisateur.objects.create(**utilisateur_data)
        fournisseur = Fournisseur.objects.create(fournisseur=utilisateur, **validated_data)
        return fournisseur

class ClientSerializer(serializers.ModelSerializer):
    client = UtilisateurSerializer()
    class Meta:
        model = Client
        fields = "__all__"
    
    def create(self, validated_data):
        utilisateur_data = validated_data.pop('fournisseur')
        utilisateur_data = validated_data.pop('employe')
        utilisateur_data = validated_data.pop('client')
        utilisateur = Utilisateur.objects.create(**utilisateur_data)
        client = Client.objects.create(fournisseur=utilisateur, **validated_data)
        return client

class CentreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Centre
        fields = "__all__"

class AchatSerializer(serializers.ModelSerializer):
    prdA = ProduitSerializer()
    fournisseurA = FournisseurSerializer()
    class Meta:
        model = Achat
        fields = "__all__"


class InsertAchatSeriaizer(serializers.ModelSerializer):
    prdA = serializers.PrimaryKeyRelatedField(queryset=Produit.objects.all())
    fournisseurA = serializers.PrimaryKeyRelatedField(queryset=Fournisseur.objects.all())

    class Meta:
        model = Achat
        fields = "__all__"


class MasAbsSerializer(serializers.ModelSerializer):
    empMA = EmployeSerializer(read_only = True)
    class Meta:
        model = MasAbs
        fields = "__all__"

class InsertVenteCentreSeriaizer(serializers.ModelSerializer):
    prdV = serializers.PrimaryKeyRelatedField(queryset=Produit.objects.all())
    clientV = serializers.PrimaryKeyRelatedField(queryset=Client.objects.all())
    centre = serializers.PrimaryKeyRelatedField(queryset=Centre.objects.all())

    class Meta:
        model = Vente
        fields = "__all__"

class InsertVenteSeriaizer(serializers.ModelSerializer):
    prdV = serializers.PrimaryKeyRelatedField(queryset=Produit.objects.all())
    clientV = serializers.PrimaryKeyRelatedField(queryset=Client.objects.all())
    centre = None

    class Meta:
        model = Vente
        fields = "__all__"

class VentesSerializer(serializers.ModelSerializer):
    prdV = ProduitSerializer(read_only = True)
    clientV = ClientSerializer(read_only = True)
    class Meta:
        model = Vente
        fields = "__all__"


class VersementSerializer(serializers.ModelSerializer):
    achat = AchatSerializer(read_only = True)
    vente = VentesSerializer(read_only= True)
    class Meta:
        model =Versement
        fields = "__all__"

class TransferSerializer(serializers.ModelSerializer):
    prdT = ProduitSerializer(read_only = True)
    centreT = CentreSerializer(read_only=True)
    
    class Meta:
        model =Transfert
        fields = "__all__"