from django.forms import forms, ModelForm
from .models import activity

class ActivityForm(ModelForm):
    
    class Meta:
        model = activity
        fields = ("user","file_uploaded","result_level", "Department")
        
    def __init__(self, *args, **kwargs):
        super(ActivityForm, self).__init__(*args, **kwargs)

        self.fields['user'].widget.attrs['hidden'] = 'true'
        self.fields['file_uploaded'].widget.attrs['class'] = 'form-control'
        self.fields['file_uploaded'].widget.attrs['style'] = 'max-width: 500px'
        self.fields['file_uploaded'].widget.attrs['placeholder'] = 'File_Uploaded'
        self.fields['file_uploaded'].label= ''
        self.fields['result_level'].widget.attrs['class'] = 'form-control'
        self.fields['result_level'].widget.attrs['style'] = 'max-width: 500px'
        self.fields['result_level'].widget.attrs['placeholder'] = 'Result Level'
        self.fields['result_level'].label = ''
        self.fields['Department'].widget.attrs['class'] = 'form-control'
        self.fields['Department'].widget.attrs['style'] = 'max-width: 500px'
        self.fields['Department'].widget.attrs['placeholder'] = 'Department'
        self.fields['Department'].label = ''
        