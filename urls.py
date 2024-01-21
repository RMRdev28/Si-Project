from django.urls import path
from . import views

urlpatterns = [
    path('dashboard/', views.get_dashboard_data),
    path('dashboard/win', views.get_win),
    path('dashboard/prd', views.get_sell_prd_mat),
    path('dashboard/nbracahtvent', views.get_nbr_achat_vente),
    path('dashboard/topf', views.get_top_fournisseur),
    path('dashboard/topc', views.get_top_client),
    path('produits/', views.get_all_products),
    path('produitsall/', views.get_all_products_all),
    path('create/produit/', views.create_product),
    path('create/user/', views.create_user),
    path('create/fournisseur/', views.create_fournisseur),
    path('create/vente/', views.create_Vente),
    path('info/user/<int:id_user>', views.get_user),
    path('info/employe/<int:id_emp>', views.get_all_abs_mas),
    path('suppimer/produit/<int:idP>', views.delete_product),
    path('getnotifications/', views.get_notifications),
    path('markasread/', views.markasread),
    path('utilisateurs/', views.get_all_users),
    path('emps/', views.get_all_emps),
    path('fournisseurs/', views.get_all_fournisseurs),
    path('clients/', views.get_all_clients),
    path('centres/', views.get_all_centres),
    path('achats/', views.get_all_achats),
    path('ventes/', views.get_all_ventes),
    path('achat/versement/<int:id_achat>', views.get_versement_achat),
    path('vente/versement/<int:id_vente>', views.get_versement_vente),
    path('centre/transfert/<int:id_centre>', views.get_transfer_center),
    path('employer/sallair/<int:id_emp>/<int:mois>/<int:anne>', views.get_salaire_mois),


    
]