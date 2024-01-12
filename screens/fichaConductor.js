function fillCommonData(data) {
    const nodesToFill$$ = document.querySelectorAll("[data-fill]")
    console.log('##ABEL## >> nodesToFill$$ >>  fillCommonData', nodesToFill$$);
    for (const node$$ of nodesToFill$$) {
        node$$.shadowRoot.querySelector("[data-fill]").value = data[node$$.getAttribute("data-fill")].valorCampo;
    }
}

function createTable(tableData) {

//define table
    const table = new window.Tabulator("#table-salary", {
        data: formatTable(tableData),
        autoColumns: true,
    });
}

function formatTable(tableData) {
    return tableData.map((tableRow) => {
        const formattedTableRow = {}
        for (const key in tableRow) {
            formattedTableRow[tableRow[key].etiqueta] = tableRow[key].valorCampo
        }
        return formattedTableRow
    })
}

CargaDatos()

function CargaDatos(driverData) {
    const driver = JSON.parse(driverData)

    const testData = {
        "IBAN":
            {
                "etiqueta": "Transferencia",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": ""
            },
        "apellidos":
            {
                "etiqueta": "Apellidos",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "Ropero Fernandez"
            },
        "codigoComunidadAutonoma":
            {
                "etiqueta": "Código de comunidad autónoma",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "12"
            },
        "codigoMunicipio":
            {
                "etiqueta": "Código de municipio",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "28007"
            },
        "codigoNominasol":
            {
                "etiqueta": "Código nominasol",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "942"
            },
        "codigoProvincia":
            {
                "etiqueta": "Código de provincia",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "28"
            },
        "correoElectronico":
            {
                "etiqueta": "Correo electrónico",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "victor.ropero.fdez@gmail.com"
            },
        "datos_domicilio":
            {
                "bloque":
                    {
                        "etiqueta": "Id Conductor",
                        "funcionFM": "",
                        "parametrosFuncion": "",
                        "valorCampo": "1"
                    },
                "codigoComunidadAutonoma":
                    {
                        "etiqueta": "Código de comunidad autónoma",
                        "funcionFM": "",
                        "parametrosFuncion": "",
                        "valorCampo": "12"
                    },
                "codigoMunicipio":
                    {
                        "etiqueta": "Código de municipio",
                        "funcionFM": "",
                        "parametrosFuncion": "",
                        "valorCampo": "28007"
                    },
                "codigoPostal":
                    {
                        "etiqueta": "Código postal",
                        "funcionFM": "",
                        "parametrosFuncion": "",
                        "valorCampo": "28050"
                    },
                "codigoProvincia":
                    {
                        "etiqueta": "Código de provincia",
                        "funcionFM": "",
                        "parametrosFuncion": "",
                        "valorCampo": "28"
                    },
                "comunidadAutonoma":
                    {
                        "etiqueta": "Id Conductor",
                        "funcionFM": "",
                        "parametrosFuncion": "",
                        "valorCampo": "Madrid"
                    },
                "escalera":
                    {
                        "etiqueta": "Id Conductor",
                        "funcionFM": "",
                        "parametrosFuncion": "",
                        "valorCampo": "A"
                    },
                "municipio":
                    {
                        "etiqueta": "Id Conductor",
                        "funcionFM": "",
                        "parametrosFuncion": "",
                        "valorCampo": "Alcorcón"
                    },
                "nombreVia":
                    {
                        "etiqueta": "Id Conductor",
                        "funcionFM": "",
                        "parametrosFuncion": "",
                        "valorCampo": "Princesa"
                    },
                "numeroVia":
                    {
                        "etiqueta": "Id Conductor",
                        "funcionFM": "",
                        "parametrosFuncion": "",
                        "valorCampo": "12"
                    },
                "pais":
                    {
                        "etiqueta": "Id Conductor",
                        "funcionFM": "",
                        "parametrosFuncion": "",
                        "valorCampo": "España"
                    },
                "piso":
                    {
                        "etiqueta": "Id Conductor",
                        "funcionFM": "",
                        "parametrosFuncion": "",
                        "valorCampo": "3"
                    },
                "provincia":
                    {
                        "etiqueta": "Id Conductor",
                        "funcionFM": "",
                        "parametrosFuncion": "",
                        "valorCampo": "Madrid"
                    },
                "puerta":
                    {
                        "etiqueta": "Id Conductor",
                        "funcionFM": "",
                        "parametrosFuncion": "",
                        "valorCampo": "C"
                    },
                "tipoVia":
                    {
                        "etiqueta": "Id Conductor",
                        "funcionFM": "",
                        "parametrosFuncion": "",
                        "valorCampo": "CL"
                    }
            },
        "descripcion":
            {
                "etiqueta": "Descripción",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": ""
            },
        "dni":
            {
                "etiqueta": "Nombre Completo",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "50557804D"
            },
        "empresaNombre":
            {
                "etiqueta": "Empresa Actual",
                "funcionFM": "mostrarID",
                "parametrosFuncion": "{\"id_Registro\":\"DA7F20E9-4CFC-B84E-AA8B-BD827FE07ACF\"}",
                "valorCampo": "GARRIDO MOBILITY MADRID, S.L."
            },
        "estadoNombre":
            {
                "etiqueta": "Estado",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "Baja Completa"
            },
        "fechaAltaSegSocial":
            {
                "etiqueta": "Transferencia",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "31/10/2023"
            },
        "fechaAntiguedad":
            {
                "etiqueta": "Fecha de Antiguedad",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": ""
            },
        "fechaBajaSegSocial":
            {
                "etiqueta": "Fecha baja seguridad social",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "15/11/2023"
            },
        "fechaIncorporacion":
            {
                "etiqueta": "Fecha de incorporación",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "31/10/2023"
            },
        "fechaVencimientoNIE":
            {
                "etiqueta": "Fecha vencimiento INE",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": ""
            },
        "fechaVencimientoPermisoTrabajo":
            {
                "etiqueta": "Fecha vencimiento permiso de trabajo",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": ""
            },
        "formaCobro":
            {
                "etiqueta": "Forma de cobro",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": ""
            },
        "id_Conductor":
            {
                "etiqueta": "Id Conductor",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "5E3B3669-01DD-4B9D-A711-DC6A8B8C8825"
            },
        "id_ContratoActual":
            {
                "etiqueta": "Id contrato actual",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": ""
            },
        "isActivo":
            {
                "etiqueta": "Activo",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "0"
            },
        "isAsignable":
            {
                "etiqueta": "Asignable",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": ""
            },
        "motivoBaja":
            {
                "etiqueta": "Motivo de baja",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": ""
            },
        "movil":
            {
                "etiqueta": "Móvil",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": ""
            },
        "nacionalidad":
            {
                "etiqueta": "Nacionalidad",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "ESPAÑA"
            },
        "nacionalidad2":
            {
                "etiqueta": "Segunda nacionalidad",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": ""
            },
        "nieOdni":
            {
                "etiqueta": "Tipo Documento",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "DNI"
            },
        "nombre":
            {
                "etiqueta": "Nombre Completo",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "Victor"
            },
        "nombreRNT":
            {
                "etiqueta": "Nombre RNT",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "ROFEV"
            },
        "nominas":
            [
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "150"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "123,6"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "998,12"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "8/9/2018"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "A37459AF-7B8B-C046-9BBF-B84E84E64358"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "874,52"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Enero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "ORTEGA MONTORO, ANTONIO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "704"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "637,92"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1439,47"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12/12/2022"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9B56A594-4AA9-E848-8450-F49EA5B86D21"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "801,55"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Enero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "HENAO MARIN, SANTIAGO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "3"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "706"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "172,29"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1326,64"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "21/12/2022"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "597A1F41-0E9F-E745-A60E-66612E0557E3"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1154,35"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Enero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "DAVID, GEORGE NICOLAE"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "4"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "708"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "106,05"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "530,65"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20/1/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20/1/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "45B495F1-CB0D-F747-AA1B-C928E95B4F7A"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "424,6"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Enero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "DE JESUS SERRANO, BRAYAN"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "5"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "710"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "114,32"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "530,65"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20/1/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20/1/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "8A14B495-DE74-3A42-BE1E-765EE7882324"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "416,33"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Enero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "PEREIRA PIRES, LUIS MIGUEL"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "702"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "609,62"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "884,42"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "25/10/2022"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20/1/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "B30FCE89-C481-5E4C-B28A-1C4EAC88E706"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "274,8"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Enero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "ALVAREZ DELIS, FRANK MIGUEL"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "7"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "702"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "26,16"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "309,55"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "25/10/2022"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20/1/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "8A3BB9B0-1ADD-2E46-A37D-D8CA79756E2C"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "283,39"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Enero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "ALVAREZ DELIS, FRANK MIGUEL"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "10"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "705"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1930,01"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "663,32"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "16"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "14/12/2022"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "16/1/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0B093AF0-6FAD-F349-8087-6E9E2F023217"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "-1266,69"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Enero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "SENNOUN, ACHRAF"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "11"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "705"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "14/12/2022"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "16/1/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6D177FFF-F316-774A-835B-A39CCB752260"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Enero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "SENNOUN, ACHRAF"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "14"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "703"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "199,79"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "174,31"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "25/11/2022"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2/1/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9D00CC9D-3FF5-0B4C-9C91-2C462D252286"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "-25,48"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Enero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "GUZMAN GUZMAN, LUIS EDUARDO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "15"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "703"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "11,21"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "132,66"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "25/11/2022"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/1/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2/1/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "5FEA1769-78C2-C94A-AAF5-796E661E0F47"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "121,45"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Enero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "GUZMAN GUZMAN, LUIS EDUARDO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "18"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "150"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "119,68"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "901,53"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "8/9/2018"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/2/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "EC05217F-139E-C844-90F2-460DE931A10E"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "781,85"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Febrero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "ORTEGA MONTORO, ANTONIO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "19"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "704"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "525,3"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1444,98"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12/12/2022"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/2/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "DCDE5C76-49B4-0543-AC69-CE319EF32E06"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "919,68"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Febrero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "HENAO MARIN, SANTIAGO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "22"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "710"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "240,67"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2129,27"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "205,97"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20/1/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/2/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "7D25DD80-F7E5-1842-94CC-07A0F2BE3F65"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1888,6"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Febrero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "PEREIRA PIRES, LUIS MIGUEL"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "23"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "714"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "216,52"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "619,1"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "14"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "15/2/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "15/2/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "47FF06F6-4938-A34B-ACA7-F0681D346F19"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "402,58"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Febrero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "VELASQUEZ MIRATIA, JEFFERSON FRANCISCO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "24"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "708"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1888,98"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1207,86"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20/1/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/2/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "74133F1F-834F-8541-B241-6AD6C77795C1"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "-681,12"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Febrero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "DE JESUS SERRANO, BRAYAN"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "706"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "165,39"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1326,64"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "21/12/2022"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/2/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "D2CD1210-08F4-7645-B0D8-7CC1A3A3EEBE"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1161,25"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Febrero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "DAVID, GEORGE NICOLAE"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "32"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "706"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "21/12/2022"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/2/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "74245C36-3FE5-0E4B-84DE-02F45AAFA4E3"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Febrero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "DAVID, GEORGE NICOLAE"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "35"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "712"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "288,36"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "530,65"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "3/2/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "3/2/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "14/2/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "BD7E3ADA-1E2B-3A41-AB12-A19A43738668"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "242,29"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Febrero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "MATOS FELIZ, YOVANNY"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "36"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "712"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "3/2/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "3/2/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "28/2/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "14/2/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "BB07DE5A-D458-234D-91DE-125A304F1672"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Febrero"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "MATOS FELIZ, YOVANNY"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "47"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "150"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "123,6"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "998,12"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "8/9/2018"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/3/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "8C4F36A8-33EF-C141-A674-50248442BDB1"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "874,52"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Marzo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "ORTEGA MONTORO, ANTONIO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "48"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "710"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "196,85"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1326,64"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20/1/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/3/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "11981649-EBD6-4045-8C02-5637C2363B53"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1129,79"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Marzo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "PEREIRA PIRES, LUIS MIGUEL"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "49"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "715"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "167,26"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1326,64"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2/3/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2/3/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9BE0C2CC-7D9B-DE4D-8995-71EB1C965BA9"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1159,38"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Marzo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "GONZALEZ QUIÑONEZ, ESWIN GEOVANY"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "50"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "717"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "461,51"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "972,87"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "22"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "10/3/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "10/3/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "99E15465-9F25-FA4B-BCDA-E047AB30C91E"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "511,36"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Marzo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "ALMADA RUIZ, LIDIA MARIANA"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "51"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "718"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "29,89"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "353,77"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "8"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "24/3/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "24/3/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0BDE3694-B9A9-304E-AC1A-7853545D541F"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "323,88"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Marzo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "VELASQUEZ CHOQUE, JOHNY JOSE"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "52"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "704"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "926,13"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "442,22"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12/12/2022"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/3/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/3/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "F5E822D2-F383-0D48-98C6-D910B8E552C5"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "-483,91"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Marzo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "HENAO MARIN, SANTIAGO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "53"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "704"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "26,16"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "309,55"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12/12/2022"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/3/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/3/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9FD74C93-036C-E84C-AE82-46A627D90649"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "283,39"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Marzo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "HENAO MARIN, SANTIAGO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "54"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "708"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1558,42"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1017,08"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "22"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20/1/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/3/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "22/3/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "B8D868FD-094D-514B-BF23-B58B202740C0"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "-541,34"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Marzo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "DE JESUS SERRANO, BRAYAN"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "55"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "708"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "18,68"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "221,11"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20/1/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/3/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "22/3/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "753ACE61-ECBA-FA4F-8A38-11B11CE1CCDF"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "202,43"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Marzo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "DE JESUS SERRANO, BRAYAN"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "56"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "714"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "288,49"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1017,09"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "22"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "15/2/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/3/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "22/3/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "E5DF61DB-C225-FA41-B436-A5912EF32849"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "728,6"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Marzo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "VELASQUEZ MIRATIA, JEFFERSON FRANCISCO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "57"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "714"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "11,21"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "132,66"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "15/2/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/3/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/3/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "22/3/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "E624D175-F42D-414F-B156-DCBFC8E31232"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "121,45"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Marzo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "VELASQUEZ MIRATIA, JEFFERSON FRANCISCO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "60"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "150"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "122,3"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "965,93"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "8/9/2018"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/4/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30/4/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30/4/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "C1927EC5-0000-C640-939F-FC753949DE75"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "843,63"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Abril"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "ORTEGA MONTORO, ANTONIO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "61"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "715"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "124,89"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1326,64"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2/3/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/4/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30/4/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30/4/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6FD309BF-DB83-064E-87A6-8401D835352F"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1201,75"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Abril"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "GONZALEZ QUIÑONEZ, ESWIN GEOVANY"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "62"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "717"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "179,9"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1326,64"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "10/3/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/4/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30/4/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30/4/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "531C0826-7CB3-8D4E-9F9E-0537CCC88C2E"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1146,74"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Abril"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "ALMADA RUIZ, LIDIA MARIANA"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "63"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "718"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "641,51"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1326,64"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "24/3/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/4/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30/4/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30/4/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0CB560BF-20A9-ED44-8440-FED76353DA7C"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "685,13"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Abril"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "VELASQUEZ CHOQUE, JOHNY JOSE"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "65"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "720"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "486,1"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "751,77"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "18"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "13/4/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "13/4/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30/4/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30/4/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2CD0C958-CC88-A140-8A21-F29CD3096CD1"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "265,67"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Abril"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "ALVAREZ GOMEZ, VICTOR"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "66"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "710"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "40,64"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "928,65"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "18"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20/1/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/4/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30/4/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "18/4/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "C77CDC6B-A212-5F48-84E6-15E57B868B17"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "888,01"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Abril"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "PEREIRA PIRES, LUIS MIGUEL"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "67"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "710"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "26,16"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "309,55"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20/1/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/4/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30/4/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "18/4/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "FD9B972A-0E8C-D842-9AE2-119861F2273E"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "283,39"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Abril"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "PEREIRA PIRES, LUIS MIGUEL"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "72"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "150"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "123,6"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "998,12"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "8/9/2018"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/5/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "83BFAEBA-C9DD-7042-8D31-0E6FF4F8850E"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "874,52"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Mayo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "ORTEGA MONTORO, ANTONIO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "73"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "717"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "263,14"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1431,97"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "30"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "10/3/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/5/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "B579D848-F9C0-F646-90A2-6E694F4C8910"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1168,83"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Mayo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "ALMADA RUIZ, LIDIA MARIANA"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "74"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "721"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "377,06"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "924,94"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12/5/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12/5/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "D64E0D25-A379-5F4A-86C8-0642079774E1"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "547,88"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Mayo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "COLLAGUAZO NARVAEZ, HERMENEGILDO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "75"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "723"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "158,82"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "884,42"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "20"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12/5/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12/5/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "816E76C3-94F6-FB4D-9879-E2D179C89DE0"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "725,6"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Mayo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "BRANDAO FERRAZ, BRUNO JOSE"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "76"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "725"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "22,43"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "265,32"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "26/5/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "26/5/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9EEC935F-5FAB-374F-A6C6-58F119FBDD97"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "242,89"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Mayo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "MACHUCA MACHUCA, LEIVA GABRIEL"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "83"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "718"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "418,87"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "486,43"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "8"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "24/3/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/5/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "8/5/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1DB20E64-56BE-F148-B8C0-CFA9DED4F222"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "67,56"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Mayo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "VELASQUEZ CHOQUE, JOHNY JOSE"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "84"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "718"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "14,95"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "176,89"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "24/3/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/5/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "8/5/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "907AB5DC-55D8-E047-A9F6-F6D8A8019D7D"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "161,94"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Mayo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "VELASQUEZ CHOQUE, JOHNY JOSE"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "85"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "720"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "385,99"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "398"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "13/4/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/5/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/5/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "C2C6D6FA-9C47-D044-86A2-6B05935FF43F"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12,01"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Mayo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "ALVAREZ GOMEZ, VICTOR"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "86"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "720"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "13/4/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/5/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/5/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1B9E5D36-06ED-ED4A-B7B4-C5919EB3C6C6"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Mayo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "ALVAREZ GOMEZ, VICTOR"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "87"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "722"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "156,69"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "574,87"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "13"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12/5/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12/5/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "24/5/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "00000"
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "D85182C7-DAC0-8041-86DE-33F443CCFE39"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "418,18"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Mayo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "PEREZ BANDERAS, SERGIO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        }
                },
                {
                    "anioEjercicio":
                        {
                            "etiqueta": "Año",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2023"
                        },
                    "categoria":
                        {
                            "etiqueta": "Categoría",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "centroDeTrabajo":
                        {
                            "etiqueta": "Centro de trabajo",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "codigoNomina":
                        {
                            "etiqueta": "Código",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "88"
                        },
                    "codigoOcupacion":
                        {
                            "etiqueta": "Código de ocupación",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "codigoTrabajador":
                        {
                            "etiqueta": "Código trabajador",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "722"
                        },
                    "convenio":
                        {
                            "etiqueta": "Convenio",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "6"
                        },
                    "deduccionesImporte":
                        {
                            "etiqueta": "Importe deducciones",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "3,73"
                        },
                    "devengadoImporte":
                        {
                            "etiqueta": "Importe devengado",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "44,22"
                        },
                    "dias":
                        {
                            "etiqueta": "Número días",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "embargadoImporte":
                        {
                            "etiqueta": "Importe embargos",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "fechaAntiguedad":
                        {
                            "etiqueta": "Fecha de antiguedad",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12/5/2023"
                        },
                    "fechaControl":
                        {
                            "etiqueta": "Fecha de control",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1/1/1900"
                        },
                    "fechaDesde":
                        {
                            "etiqueta": "Fecha desde",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "12/5/2023"
                        },
                    "fechaEmision":
                        {
                            "etiqueta": "Fecha de emisión",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "31/5/2023 00:00"
                        },
                    "fechaHasta":
                        {
                            "etiqueta": "Fecha hasta",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "24/5/2023"
                        },
                    "fechaUltimaActualizacion_dSol":
                        {
                            "etiqueta": "Última actualización DELSOL",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9/10/2023 10:17:38"
                        },
                    "grupoCotizacion":
                        {
                            "etiqueta": "Grupo de cotización",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "9"
                        },
                    "horasComplementarias":
                        {
                            "etiqueta": "Horas complementarias",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "horasPorDia":
                        {
                            "etiqueta": "Horas por día",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": ""
                        },
                    "id":
                        {
                            "etiqueta": "Id",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "AB1F9AA6-DC7D-6F4C-AE3D-F5BA6575139C"
                        },
                    "isContabilizada":
                        {
                            "etiqueta": "Contabilizada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "isCopia":
                        {
                            "etiqueta": "Duplicada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "0"
                        },
                    "isIncluidaEnTransferencia":
                        {
                            "etiqueta": "Incluida en transferencia",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "1"
                        },
                    "liquidoApercibir":
                        {
                            "etiqueta": "Líquido a percibir",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "40,49"
                        },
                    "mesNomina":
                        {
                            "etiqueta": "Mes nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "Mayo"
                        },
                    "nombreEmpresa":
                        {
                            "etiqueta": "Conductor",
                            "funcionFM": "mostrarID",
                            "parametrosFuncion": "{\"id_Registro\":\"5E3B3669-01DD-4B9D-A711-DC6A8B8C8825\"}",
                            "valorCampo": "PEREZ BANDERAS, SERGIO"
                        },
                    "porcentajeRealJornada":
                        {
                            "etiqueta": "Porcentaje real jornada",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "100"
                        },
                    "tipoNomina":
                        {
                            "etiqueta": "Cod. tipo nómina",
                            "funcionFM": "",
                            "parametrosFuncion": "",
                            "valorCampo": "2"
                        }
                }
            ],
        "numeroSegSocial":
            {
                "etiqueta": "Número seguridad social",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "281286942382"
            },
        "tarjetaSolred":
            {
                "etiqueta": "Tarjeta solred",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": ""
            },
        "telefono":
            {
                "etiqueta": "Teléfono",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "61001928700"
            },
        "tipoJornada":
            {
                "etiqueta": "Tipo de jornanda",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": ""
            },
        "transferencia":
            {
                "etiqueta": "Transferencia",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": ""
            },
        "turnoPreferente":
            {
                "etiqueta": "Turno preferente",
                "funcionFM": "",
                "parametrosFuncion": "",
                "valorCampo": "Mañana"
            }
    };
    console.log('##ABEL## >> CargaDatos >>  CargaDatos', testData);
    fillCommonData(driverData)
    createTable(driverData.nominas)
}
