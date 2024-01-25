//Se define variable global para controlar el id de Conductor actual que se muestra en la ficha.
window.idConductor_g = null;

function fillCommonData(allData) {
    // Selecciona todos los elementos con el atributo "data-fill"
    const nodesToFill$$ = document.querySelectorAll("[data-fill]");
    console.log('##ABEL## >> nodesToFill$$ >>  fillCommonData', nodesToFill$$);

    // Itera sobre cada elemento seleccionado
    for (const node$$ of nodesToFill$$) {
        // Busca el elemento con el atributo "data-fill" en la sombra del elemento actual
        const queriedNode$$ = node$$.shadowRoot.querySelector("[data-fill]");
        // Busca el elemento <label> en la sombra del elemento actual
        const labelNode$$ = node$$.shadowRoot.querySelector("label");

        // Obtiene los datos correspondientes al elemento actual
        const field = allData[node$$.getAttribute("data-fill")];

        // Verifica si field y field.valorCampo no son "falsy"
        if (field && field.valorCampo) {
            // Asigna el valor de field.valorCampo al elemento con "data-fill"

            //queriedNode$$.value = field.valorCampo;
            queriedNode$$.textContent = field.valorCampo; //Se utiliza textContent porque la etiqueta es span

            // Si field.funcionFM tiene longitud mayor a 0, establece atributos en el elemento <label>
            if (field.funcionFM.length > 0) {
                labelNode$$.setAttribute("data-funcion-fm", field.funcionFM);
                labelNode$$.setAttribute("data-parametros-funcion", field.parametrosFuncion);
            }
        }
    }
}



function createTable(tableData) {
    //define table
    const table = new window.Tabulator("#table-salary", {
        data: tableData,
        height: "400",
        // layout: "fitColumns",
        // autoColumns:true,
        columns: formatColumns(tableData[0]),
    });
}

function formatColumns(tableRow) {
    const formattedColumns = []
    for (const key in tableRow) {
        formattedColumns.push(
            {
                title: tableRow[key].etiqueta,
                field: key + ".valorCampo",
                headerFilter: "list",
                headerFilterParams: { valuesLookup: "active", multiselect: true },
                headerFilterFunc: "in"
            }
        )

    }


    return formattedColumns
}

//CargaDatos()

function CargaDatos(driverData) {

    const driver = JSON.parse(driverData);
    //const driver = driverData;
    //Obtener el id de Conductor para establecerlo como variable global
    window.idConductor_g = driver.id.valorCampo
    console.log(window.idConductor_g)

    //Imprimir driver
    //console.log(JSON.stringify(driver))

    const testData = {
        "IBAN_lk":
        {
            "etiqueta": "IBAN",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": ""
        },
        "apellidos_ca":
        {
            "etiqueta": "Apellidos",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": "Monescillo Alonso"
        },
        "correoElectronico":
        {
            "etiqueta": "Correo electrónico",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": ""
        },
        "datos_domicilio":
        {
            "bloque":
            {
                "etiqueta": "Bloque",
                "funcionFM": "",
                "parametrosFuncion": "",
                "sorter": "string",
                "valorCampo": "1"
            },
            "codigoComunidadAutonoma_lk":
            {
                "etiqueta": "Código de comunidad autónoma",
                "funcionFM": "",
                "parametrosFuncion": "",
                "sorter": "number",
                "valorCampo": "12"
            },
            "codigoMunicipio_lk":
            {
                "etiqueta": "Código de municipio",
                "funcionFM": "",
                "parametrosFuncion": "",
                "sorter": "number",
                "valorCampo": "28007"
            },
            "codigoPostal":
            {
                "etiqueta": "Código postal",
                "funcionFM": "",
                "parametrosFuncion": "",
                "sorter": "number",
                "valorCampo": "28050"
            },
            "codigoProvincia_lk":
            {
                "etiqueta": "Código de provincia",
                "funcionFM": "",
                "parametrosFuncion": "",
                "sorter": "number",
                "valorCampo": "28"
            },
            "comunidadAutonoma_lk":
            {
                "etiqueta": "Comunidad Autónomo",
                "funcionFM": "",
                "parametrosFuncion": "",
                "sorter": "string",
                "valorCampo": "Madrid"
            },
            "escalera":
            {
                "etiqueta": "Escalera",
                "funcionFM": "",
                "parametrosFuncion": "",
                "sorter": "string",
                "valorCampo": "A"
            },
            "municipio_lk":
            {
                "etiqueta": "Municipio",
                "funcionFM": "",
                "parametrosFuncion": "",
                "sorter": "string",
                "valorCampo": "Alcorcón"
            },
            "nombreVia":
            {
                "etiqueta": "Nombre vía",
                "funcionFM": "",
                "parametrosFuncion": "",
                "sorter": "string",
                "valorCampo": "Princesa"
            },
            "numeroVia":
            {
                "etiqueta": "Número vía",
                "funcionFM": "",
                "parametrosFuncion": "",
                "sorter": "number",
                "valorCampo": "12"
            },
            "pais_lk":
            {
                "etiqueta": "País",
                "funcionFM": "",
                "parametrosFuncion": "",
                "sorter": "string",
                "valorCampo": "España"
            },
            "piso":
            {
                "etiqueta": "Piso",
                "funcionFM": "",
                "parametrosFuncion": "",
                "sorter": "string",
                "valorCampo": "3"
            },
            "provincia_lk":
            {
                "etiqueta": "Provincia",
                "funcionFM": "",
                "parametrosFuncion": "",
                "sorter": "string",
                "valorCampo": "Madrid"
            },
            "puerta":
            {
                "etiqueta": "Puerta",
                "funcionFM": "",
                "parametrosFuncion": "",
                "sorter": "string",
                "valorCampo": "C"
            },
            "tipoVia":
            {
                "etiqueta": "Tipo de vía",
                "funcionFM": "",
                "parametrosFuncion": "",
                "sorter": "string",
                "valorCampo": "CL"
            }
        },
        "descripcion":
        {
            "etiqueta": "Descripción",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": ""
        },
        "dni":
        {
            "etiqueta": "D.N.I",
            "funcionFM": "mostrarID",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": "50224118F"
        },
        "estadoNombre_lk":
        {
            "etiqueta": "Estado",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": "Baja Completa"
        },
        "fechaAltaSegSocial":
        {
            "etiqueta": "Fecha alta seguridad social",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "date",
            "valorCampo": "20/4/2018"
        },
        "fechaAntiguedad":
        {
            "etiqueta": "Fecha de Antiguedad",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "date",
            "valorCampo": ""
        },
        "fechaBajaSegSocial":
        {
            "etiqueta": "Fecha baja seguridad social",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "date",
            "valorCampo": ""
        },
        "fechaIncorporacion":
        {
            "etiqueta": "Fecha de incorporación",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "date",
            "valorCampo": ""
        },
        "fechaVencimientoNIE":
        {
            "etiqueta": "Fecha vencimiento NIE",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "date",
            "valorCampo": ""
        },
        "fechaVencimientoPermisoTrabajo":
        {
            "etiqueta": "Fecha vencimiento permiso de trabajo",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "date",
            "valorCampo": ""
        },
        "formaCobro":
        {
            "etiqueta": "Forma de cobro",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "number",
            "valorCampo": ""
        },
        "id":
        {
            "etiqueta": "Id Conductor",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": "78941C2F-44F2-41D1-939F-2AF3846E4BC1"
        },
        "id_ContratoActual":
        {
            "etiqueta": "Id contrato actual",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": ""
        },
        "isActivo":
        {
            "etiqueta": "Activo",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "boolean",
            "valorCampo": "0"
        },
        "isAsignable":
        {
            "etiqueta": "Asignable",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "boolean",
            "valorCampo": ""
        },
        "motivoBaja":
        {
            "etiqueta": "Motivo de baja",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": ""
        },
        "movil":
        {
            "etiqueta": "Móvil",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "number",
            "valorCampo": ""
        },
        "nacionalidad":
        {
            "etiqueta": "Nacionalidad",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": ""
        },
        "nacionalidad2":
        {
            "etiqueta": "Segunda nacionalidad",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": ""
        },
        "nieOdni":
        {
            "etiqueta": "Tipo Documento",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": "DNI"
        },
        "nombre":
        {
            "etiqueta": "Nombre",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": "Monescillo Alonso, Borja"
        },
        "nombreRNT":
        {
            "etiqueta": "Nombre RNT",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": "MOALM"
        },
        "nominas": [],
        "numeroSegSocial":
        {
            "etiqueta": "Número seguridad social",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "number",
            "valorCampo": ""
        },
        "tarjetaSolred_lk":
        {
            "etiqueta": "Tarjeta solred",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": ""
        },
        "telefono":
        {
            "etiqueta": "Teléfono",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "number",
            "valorCampo": "645531356"
        },
        "tipoJornada":
        {
            "etiqueta": "Tipo de jornanda",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "number",
            "valorCampo": ""
        },
        "transferencia":
        {
            "etiqueta": "Transferencia",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "number",
            "valorCampo": ""
        },
        "turnoPreferente":
        {
            "etiqueta": "Turno preferente",
            "funcionFM": "",
            "parametrosFuncion": "",
            "sorter": "string",
            "valorCampo": "Tarde"
        }
    }
    console.log('##ABEL## >> CargaDatos >>  CargaDatos', driver);
    fillCommonData(driver)
    createTable(driver.nominas)

    /*console.log('##ABEL## >> CargaDatos >>  CargaDatos', testData);
    fillCommonData(testData)
    createTable(testData.nominas)*/
}

