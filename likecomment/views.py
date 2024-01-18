from rest_framework import generics, permissions
from nerdnexus_api.permissions import IsOwnerOrReadOnly
from likecomment.models import LikeComment
from likecomment.serializers import LikeCommentSerializer


class LikeCommentList(generics.ListCreateAPIView):

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = LikeCommentSerializer
    queryset = LikeComment.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class LikeCommentDetail(generics.RetrieveDestroyAPIView):

    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = LikeCommentSerializer
    queryset = LikeComment.objects.all()
