from django.urls import path
from likecomment import views

urlpatterns = [
    path('likecomment/', views.LikeCommentList.as_view()),
    path('likecomment/<int:pk>/', views.LikeCommentDetail.as_view()),
]