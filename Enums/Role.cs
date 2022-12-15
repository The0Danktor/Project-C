using System.Text.Json.Serialization;

namespace Project_C.Enums
{
    //json serializer will convert this to a string
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum Role
    {
        Client = 1,
        Client_admin = 2,
        Viscon_employee = 3,
        Viscon_admin = 4

    } 
}