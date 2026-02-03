from django.contrib import admin
from .models import Comment, Post
from django_summernote.admin import SummernoteModelAdmin


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "slug", "status", "created_on")
    list_filter = ("status", "created_on")
    search_fields = ("title", "content")
    prepopulated_fields = {"slug": ("title",)}
admin.site.register(Comment)

