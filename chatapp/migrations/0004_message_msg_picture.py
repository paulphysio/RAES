# Generated by Django 4.0.4 on 2022-09-24 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chatapp', '0003_alter_message_options_message_msg_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='msg_picture',
            field=models.ImageField(blank=True, null=True, upload_to='mdeia/msgpicture'),
        ),
    ]
