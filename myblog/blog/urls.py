from django.urls import path
from .views import PostListCreateView, PostDetailView,UserRegistrationView

urlpatterns = [
    path('posts/', PostListCreateView.as_view(), name='post-list-create'),
    path('posts/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('api/register/', UserRegistrationView.as_view(), name='user-register'),
]
