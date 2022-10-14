# Generated by Django 3.2.9 on 2022-10-13 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resapp', '0002_auto_20221012_0318'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='result_level',
            field=models.CharField(choices=[('one', '100'), ('two', '200'), ('three', '300'), ('four', '400'), ('five', '500'), ('six', '600')], default=100, max_length=200),
        ),
    ]