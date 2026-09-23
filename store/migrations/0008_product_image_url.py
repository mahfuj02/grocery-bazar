from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('store', '0007_alter_customer_options_remove_customer_email_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image_url',
            field=models.URLField(blank=True),
        ),
    ]
