# Validación del teléfono

La validación del campo teléfono se realiza mediante una función JavaScript que verifica que la entrada contenga únicamente caracteres numéricos

# IMPLEMENTACION

function validarTelefono(tel) {
return /^[0-9]+$/.test(tel);
}

# Funcionamiento

La validación exige que toda la cadena esté formada exclusivamente por uno o más dígitos numéricos.

# Limitaciones

La implementación actual no admite:

Espacios.
Guiones (-).
Paréntesis (( y )).
Prefijos internacionales (+54).
Otros caracteres especiales.
