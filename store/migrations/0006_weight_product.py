# Generated by Django 4.2.2 on 2023-06-19 17:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0005_weight'),
    ]

    operations = [
        migrations.AddField(
            model_name='weight',
            name='product',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='store.product'),
        ),
    ]