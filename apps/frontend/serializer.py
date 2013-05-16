from wadofstuff.django.serializers.json import Serializer as Builtin_Serializer

class Serializer(Builtin_Serializer):

    def end_serialization(self):
        self.objects = self.flattenStructure(self.objects[0])
        Builtin_Serializer.end_serialization(self);

    def flattenStructure(self, objects):
        fields = {}
        objects = [dict({'id':obj['pk'],'model':obj['model']}.items()+obj['fields'].items()) for obj in [objects]]
        for obj in objects[0].items():
            if (isinstance(obj[1], dict)):
                fields[obj[0]] = self.flattenStructure(obj[1])
            else:
                fields[obj[0]] = obj[1]
        return fields