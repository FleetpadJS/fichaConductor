function createTable(tableData, tableColumnData) {

    //define table
    const table = new window.Tabulator("#table-drivers", {
        data: tableData,
        maxHeight: "400",
        columnDefaults:{
            maxWidth:300, //maximum column width of 300px for all columns
        },
        // layout: "fitColumns",
        // autoColumns:true,
        columns: formatColumns(tableColumnData.mapeoCampos),
    });

    table.on("rowClick", function(e, row){
        FileMaker.PerformScript(tableColumnData.funcionFM, row[tableColumnData.campoFuncion] );
    });
}

function formatColumns(columns) {
    const formattedColumns = []
    for (const key in columns) {
        const column = columns[key]
        formattedColumns.push(
            {
                title: column.etiqueta,
                field: key,
                headerFilter: "list",
                headerFilterParams: {valuesLookup: "active", multiselect: true},
                headerFilterFunc: "in",
                order: column.orden,
                frozen:!column.desplazamiento,
                sorter: column.sorter,
                sorterParams: column.sorterParams ? JSON.parse(column.sorterParams) : null
            }
        )

    }

    return formattedColumns.sort((a, b) => a.order - b.order)
}



cargarDatosJSON()

function cargarDatosJSON(driverData, drivenColumnData) {

    //Imprimir driver
    //console.log(JSON.stringify(driver))
    // const testColumnData = {
    //     "campoFuncion": "id",
    //     "funcionFM": "activarProcesoConductor",
    //     "mapeoCampos":
    //         {
    //             "IBAN_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "IBAN",
    //                     "orden": 16,
    //                     "sorter": "alphanum"
    //                 },
    //             "apellidos_ca":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Apellidos",
    //                     "orden": 3,
    //                     "sorter": "string"
    //                 },
    //             "bloque_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Bloque",
    //                     "orden": 20,
    //                     "sorter": "string"
    //                 },
    //             "codigoComunidadAutonoma_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Código comunidad autónoma",
    //                     "orden": 27,
    //                     "sorter": "number"
    //                 },
    //             "codigoMunicipio_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Código municipio",
    //                     "orden": 25,
    //                     "sorter": "number"
    //                 },
    //             "codigoNominasol":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Código Nominasol",
    //                     "orden": 33,
    //                     "sorter": "number"
    //                 },
    //             "codigoPostal_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Código postal",
    //                     "orden": 24,
    //                     "sorter": "number"
    //                 },
    //             "codigoProvincia_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Código provincia",
    //                     "orden": 26,
    //                     "sorter": "number"
    //                 },
    //             "correoElectronico":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Correo electrónico",
    //                     "orden": 10,
    //                     "sorter": "string"
    //                 },
    //             "creadoEl":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Fecha de creación",
    //                     "orden": 28,
    //                     "sorter": "date",
    //                     "sorterParams": "{\"format\":\"yyyy-MM-dd HH:mm:ss\"}"
    //                 },
    //             "creadoPor":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Creado por",
    //                     "orden": 29,
    //                     "sorter": "string"
    //                 },
    //             "descripcion":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Descripción",
    //                     "orden": 32,
    //                     "sorter": "string"
    //                 },
    //             "dni":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "DNI",
    //                     "orden": 4,
    //                     "sorter": "alphanum"
    //                 },
    //             "empresaNombre_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Empresa",
    //                     "orden": 46,
    //                     "sorter": "string"
    //                 },
    //             "escalera_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Escalera",
    //                     "orden": 21,
    //                     "sorter": "string"
    //                 },
    //             "estadoNombre_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Estado",
    //                     "orden": 45,
    //                     "sorter": "string"
    //                 },
    //             "fechaAltaSegSocial":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Fecha alta seguridad social",
    //                     "orden": 8,
    //                     "sorter": "date",
    //                     "sorterParams": "{\"format\":\"yyyy-MM-dd\"}"
    //                 },
    //             "fechaAntiguedad":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Fecha de antigüedad",
    //                     "orden": 35,
    //                     "sorter": "date",
    //                     "sorterParams": "{\"format\":\"yyyy-MM-dd\"}"
    //                 },
    //             "fechaBajaSegSocial":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Fecha baja seguridad social",
    //                     "orden": 48,
    //                     "sorter": "date",
    //                     "sorterParams": "{\"format\":\"yyyy-MM-dd\"}"
    //                 },
    //             "fechaIncorporacion":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Fecha de incorporación",
    //                     "orden": 9,
    //                     "sorter": "date",
    //                     "sorterParams": "{\"format\":\"yyyy-MM-dd\"}"
    //                 },
    //             "fechaNacimiento":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Fecha de nacimiento",
    //                     "orden": 6,
    //                     "sorter": "date",
    //                     "sorterParams": "{\"format\":\"yyyy-MM-dd\"}"
    //                 },
    //             "fechaPublicacion":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Fecha de publicación",
    //                     "orden": 7,
    //                     "sorter": "date",
    //                     "sorterParams": "{\"format\":\"yyyy-MM-dd\"}"
    //                 },
    //             "fechaVencimientoNIE":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Fecha vencimiento NIE",
    //                     "orden": 39,
    //                     "sorter": "date",
    //                     "sorterParams": "{\"format\":\"yyyy-MM-dd\"}"
    //                 },
    //             "fechaVencimientoPermisoTrabajo":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Fecha vencimiento permiso de trabajo",
    //                     "orden": 36,
    //                     "sorter": "date",
    //                     "sorterParams": "{\"format\":\"yyyy-MM-dd\"}"
    //                 },
    //             "formaCobro":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Forma de cobro",
    //                     "orden": 37,
    //                     "sorter": "string"
    //                 },
    //             "id":
    //                 {
    //                     "desplazamiento": false,
    //                     "etiqueta": "ID",
    //                     "orden": 1,
    //                     "sorter": "string"
    //                 },
    //             "isAsignable":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Es asignable",
    //                     "orden": 44,
    //                     "sorter": "boolean"
    //                 },
    //             "modificadoEl":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Última modificación",
    //                     "orden": 30,
    //                     "sorter": "datetime",
    //                     "sorterParams": "{\"format\":\"yyyy-MM-dd HH:mm:ss\"}"
    //                 },
    //             "modificadoPor":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Modificado por",
    //                     "orden": 31,
    //                     "sorter": "string"
    //                 },
    //             "motivoBaja":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Motivo de baja",
    //                     "orden": 43,
    //                     "sorter": "string"
    //                 },
    //             "movil":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Móvil",
    //                     "orden": 13,
    //                     "sorter": "string"
    //                 },
    //             "nacionalidad":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Nacionalidad",
    //                     "orden": 11,
    //                     "sorter": "string"
    //                 },
    //             "nacionalidad2":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Segunda nacionalidad",
    //                     "orden": 41,
    //                     "sorter": "string"
    //                 },
    //             "nieOdni":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "DNI/NIE",
    //                     "orden": 40,
    //                     "sorter": "string"
    //                 },
    //             "nombre":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Nombre",
    //                     "orden": 2,
    //                     "sorter": "string"
    //                 },
    //             "nombreRNT":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Nombre RNT",
    //                     "orden": 34,
    //                     "sorter": "string"
    //                 },
    //             "nombreVia_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Nombre de vía",
    //                     "orden": 18,
    //                     "sorter": "string"
    //                 },
    //             "numeroSegSocial":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Número de seguridad social",
    //                     "orden": 5,
    //                     "sorter": "number"
    //                 },
    //             "numeroVia_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Número vía",
    //                     "orden": 19,
    //                     "sorter": "number"
    //                 },
    //             "piso_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Piso",
    //                     "orden": 22,
    //                     "sorter": "string"
    //                 },
    //             "puerta_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Puerta",
    //                     "orden": 23,
    //                     "sorter": "string"
    //                 },
    //             "tarjetaSolred_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Tarjeta solred",
    //                     "orden": 47,
    //                     "sorter": "string"
    //                 },
    //             "telefono":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Teléfono",
    //                     "orden": 12,
    //                     "sorter": "string"
    //                 },
    //             "tipoJornada":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Tipo de jornada",
    //                     "orden": 38,
    //                     "sorter": "string"
    //                 },
    //             "tipoVia_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Tipo de vía",
    //                     "orden": 17,
    //                     "sorter": "string"
    //                 },
    //             "transferencia":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Transferencia",
    //                     "orden": 15,
    //                     "sorter": "string"
    //                 },
    //             "turnoPreferente":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Turno preferente",
    //                     "orden": 42,
    //                     "sorter": "string"
    //                 },
    //             "vehiculoMatricula_lk":
    //                 {
    //                     "desplazamiento": true,
    //                     "etiqueta": "Matrícula vehículo",
    //                     "orden": 14,
    //                     "sorter": "string"
    //                 }
    //         }
    // }
    // const testData = [
    //     {
    //         "IBAN_lk": "ES3700817781667672892779",
    //         "apellidos_ca": "Ropero Fernandez",
    //         "bloque_lk": "",
    //         "codigoComunidadAutonoma_lk": "",
    //         "codigoMunicipio_lk": "28079",
    //         "codigoNominasol": "942",
    //         "codigoPostal_lk": "28011",
    //         "codigoProvincia_lk": "",
    //         "correoElectronico": "victor.ropero.fdez@gmail.com",
    //         "creadoEl": "2023-12-12 16:51:07",
    //         "creadoPor": "Admin",
    //         "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices et velit eu rutrum. Etiam bibendum ipsum vitae vestibulum venenatis. Mauris volutpat libero quam. Vestibulum quis ipsum tempor, egestas libero tristique, malesuada nibh. Mauris vulputate sapien vitae nibh facilisis, ac pretium purus dictum. Mauris venenatis, turpis ac dictum sagittis, odio purus tincidunt elit, sit amet fermentum nibh lorem vel tortor. Mauris in libero ac diam volutpat tempor. In hendrerit sed sem sit amet pellentesque. Vestibulum ac massa vitae odio laoreet dictum at rhoncus elit. Integer ac est vel enim bibendum tempus. Aenean dignissim a augue laoreet elementum. Vivamus sit amet facilisis ipsum, id fringilla tortor. Integer vitae est ultricies, tincidunt purus id, eleifend enim. Integer egestas, augue vel malesuada aliquet, elit turpis condimentum odio, a tristique ipsum nisi scelerisque erat. Vivamus tortor lacus, tristique ut enim nec, consequat porttitor odio. Phasellus facilisis enim ut nisl molestie, sed convallis ipsum vulputate. Donec mollis vitae nibh vitae tincidunt. Vestibulum lobortis eu eros vitae luctus. Vestibulum a augue non lacus dignissim dignissim. Sed eget ipsum lacus. Donec a augue faucibus, vulputate nibh eu, posuere arcu. Curabitur risus nunc, hendrerit vel mi nec, vehicula gravida nisi. Nam a dolor eu velit dignissim facilisis. Morbi tincidunt ligula in nibh dignissim, sed ornare diam iaculis.",
    //         "dni": "50557804D",
    //         "empresaNombre_lk": "GARRIDO MOBILITY MADRID, S.L.",
    //         "escalera_lk": "",
    //         "estadoNombre_lk": "Baja Completa",
    //         "fechaAltaSegSocial": "2023-10-31",
    //         "fechaAntiguedad": "2015-02-01",
    //         "fechaBajaSegSocial": "2023-11-15",
    //         "fechaIncorporacion": "2023-10-31",
    //         "fechaNacimiento": "1988-05-14",
    //         "fechaPublicacion": "",
    //         "fechaVencimientoNIE": "",
    //         "fechaVencimientoPermisoTrabajo": "",
    //         "formaCobro": "",
    //         "id": "5E3B3669-01DD-4B9D-A711-DC6A8B8C8825",
    //         "isAsignable": "",
    //         "modificadoEl": "2024-01-15 10:44:18",
    //         "modificadoPor": "Admin",
    //         "motivoBaja": "",
    //         "movil": "",
    //         "nacionalidad": "ESPAÑA",
    //         "nacionalidad2": "ITALIA",
    //         "nieOdni": "DNI",
    //         "nombre": "Victor",
    //         "nombreRNT": "ROFEV",
    //         "nombreVia_lk": "",
    //         "numeroSegSocial": "281286942382",
    //         "numeroVia_lk": "",
    //         "piso_lk": "",
    //         "puerta_lk": "",
    //         "tarjetaSolred_lk": "",
    //         "telefono": "61001928700",
    //         "tipoJornada": "",
    //         "tipoVia_lk": "",
    //         "transferencia": "",
    //         "turnoPreferente": "Mañana",
    //         "vehiculoMatricula_lk": "2332HZK"
    //     },
    //     {
    //         "IBAN_lk": "",
    //         "apellidos_ca": "Reyes Porras",
    //         "bloque_lk": "",
    //         "codigoComunidadAutonoma_lk": "",
    //         "codigoMunicipio_lk": "28079",
    //         "codigoNominasol": "806",
    //         "codigoPostal_lk": "28025",
    //         "codigoProvincia_lk": "",
    //         "correoElectronico": "walter.reyes3096@gmail.com",
    //         "creadoEl": "2023-12-12 16:51:07",
    //         "creadoPor": "Admin",
    //         "descripcion": "",
    //         "dni": "Y5787277P",
    //         "empresaNombre_lk": "GARRIDO MOBILITY MADRID, S.L.",
    //         "escalera_lk": "",
    //         "estadoNombre_lk": "Baja Completa",
    //         "fechaAltaSegSocial": "2023-04-21",
    //         "fechaAntiguedad": "",
    //         "fechaBajaSegSocial": "2023-11-07",
    //         "fechaIncorporacion": "2023-04-21",
    //         "fechaNacimiento": "1996-11-30",
    //         "fechaPublicacion": "",
    //         "fechaVencimientoNIE": "",
    //         "fechaVencimientoPermisoTrabajo": "",
    //         "formaCobro": "",
    //         "id": "742CB9F3-5405-4396-9A50-AA56593E44CA",
    //         "isAsignable": "",
    //         "modificadoEl": "2024-01-15 09:42:13",
    //         "modificadoPor": "Admin",
    //         "motivoBaja": "",
    //         "movil": "",
    //         "nacionalidad": "NICARAGUA",
    //         "nacionalidad2": "",
    //         "nieOdni": "DNI",
    //         "nombre": "Walter Alberto",
    //         "nombreRNT": "REPOW",
    //         "nombreVia_lk": "",
    //         "numeroSegSocial": "281490408370",
    //         "numeroVia_lk": "",
    //         "piso_lk": "",
    //         "puerta_lk": "",
    //         "tarjetaSolred_lk": "",
    //         "telefono": "61249840000",
    //         "tipoJornada": "",
    //         "tipoVia_lk": "",
    //         "transferencia": "",
    //         "turnoPreferente": "Mañana",
    //         "vehiculoMatricula_lk": ""
    //     }]
    // console.log('##ABEL## >> cargarDatosJSON >>  cargarDatosJSON', testData);
    // console.log('##ABEL## >> cargarDatosJSON >>  cargarDatosJSON', testColumnData);
    const drivers = JSON.parse(driverData)
    const driversColumns = JSON.parse(drivenColumnData)

    createTable(driverData, driversColumns)
}

