/* Banco didáctico P06: 10 casos originales + 15 tarjetas seleccionadas de Anki. */
window.P06_DATA = {
  "titulo": "Práctica 06 · Proteínas de importancia médica",
  "practica": "Determinación cualitativa de proteínas y proteínas de importancia médica",
  "nota_origen": "Casos educativos originales redactados a partir de resúmenes temáticos compartidos por la estudiante. Los identificadores y enlaces individuales de AMBOSS Qbank de aquel resumen no fueron verificados; estas preguntas no se atribuyen a AMBOSS ni reproducen preguntas originales.",
  "nota_datos": "Los datos numéricos utilizados proceden de los resúmenes aportados; donde no existen resultados medidos se indica expresamente. Son escenarios docentes, no pacientes reales ni resultados experimentales de la práctica.",
  "casos": [
    {
      "id": "P06-C01",
      "caso_base": "C02",
      "titulo": "Edema e hipoalbuminemia en un niño",
      "tema": "Proteínas plasmáticas y pérdida renal",
      "experimentos": [
        1,
        2,
        3
      ],
      "dificultad": "básico-intermedio",
      "relacion_practica": "La práctica estudia propiedades de las proteínas y su identificación cualitativa; el caso aplica su importancia clínica, especialmente la albúmina. La tira reactiva urinaria no equivale a la reacción de Biuret.",
      "enunciado": "Un niño presenta edema con fóvea en miembros inferiores y orina espumosa. El análisis de orina muestra proteinuria intensa, y el perfil sanguíneo revela hipoalbuminemia e hipercolesterolemia. ¿Cuál es el mecanismo principal que explica el descenso de la albúmina sérica?",
      "datos": [
        "Albúmina sérica: 2,1 g/dL",
        "Proteínas en tira urinaria: 4+",
        "Colesterol total: 290 mg/dL",
        "Edema periférico con fóvea"
      ],
      "opciones": [
        {
          "clave": "A",
          "texto": "Destrucción acelerada de eritrocitos, que reduce la concentración de albúmina",
          "correcta": false,
          "retroalimentacion": "La hemólisis afecta a los eritrocitos y origina otros indicadores, como bilirrubina indirecta elevada; no explica la proteinuria masiva."
        },
        {
          "clave": "B",
          "texto": "Aumento de la permeabilidad glomerular con pérdida urinaria de albúmina",
          "correcta": true,
          "retroalimentacion": "Correcto. La alteración de la barrera de filtración glomerular permite perder albúmina por la orina y reduce la presión oncótica plasmática."
        },
        {
          "clave": "C",
          "texto": "Incapacidad de absorber hierro y formar grupos hemo",
          "correcta": false,
          "retroalimentacion": "La deficiencia de hierro causa alteraciones de la hemoglobina, pero no explica la eliminación intensa de proteínas urinarias."
        },
        {
          "clave": "D",
          "texto": "Defecto aislado de síntesis de fibrina en la vía extrínseca",
          "correcta": false,
          "retroalimentacion": "Los defectos de coagulación se detectan con pruebas como TP y TTPa; no son la causa del patrón renal descrito."
        }
      ],
      "respuesta": "B",
      "explicacion": "El conjunto de proteinuria intensa, albúmina sérica disminuida, edema e hipercolesterolemia es característico del síndrome nefrótico. La albúmina contribuye a la presión oncótica del plasma: al perderse a través del glomérulo se favorece el movimiento de líquido hacia el intersticio. La hipercolesterolemia acompaña al síndrome por alteraciones de producción y metabolismo de lipoproteínas. Las reacciones cualitativas de proteínas permiten reconocer su presencia, pero la magnitud de la proteinuria requiere métodos cuantitativos.",
      "aprendizaje_clave": "Interpretar la relación entre proteinuria, albúmina, presión oncótica y edema.",
      "fuente_cientifica": "https://www.niddk.nih.gov/health-information/kidney-disease/children/nephrotic-syndrome-children"
    },
    {
      "id": "P06-C02",
      "caso_base": "C04",
      "titulo": "Cálculos recurrentes y aminoácidos azufrados",
      "tema": "Cistina y transporte renal de aminoácidos",
      "experimentos": [
        5
      ],
      "dificultad": "intermedio",
      "relacion_practica": "La cistina contiene un enlace disulfuro; su limitada solubilidad y la identificación cualitativa de compuestos azufrados permiten comprender el fundamento del caso.",
      "enunciado": "Un adolescente de 16 años consulta repetidamente por cólico renal. Durante el estudio de litiasis urinaria, una prueba cualitativa de cianuro-nitroprusiato en orina resulta positiva. ¿Qué alteración bioquímica explica mejor el cuadro?",
      "datos": [
        "Edad: 16 años",
        "Litiasis urinaria recurrente",
        "Prueba de cianuro-nitroprusiato urinario: positiva",
        "Sin cuantificación urinaria de cistina disponible"
      ],
      "opciones": [
        {
          "clave": "A",
          "texto": "Exceso de producción de ácido úrico por alteración del metabolismo de purinas",
          "correcta": false,
          "retroalimentacion": "La litiasis por ácido úrico se asocia con purinas, no con una prueba urinaria positiva para cistina."
        },
        {
          "clave": "B",
          "texto": "Deficiencia de fenilalanina hidroxilasa con acumulación de fenilalanina",
          "correcta": false,
          "retroalimentacion": "La fenilcetonuria altera el metabolismo de aminoácidos aromáticos; no es una causa típica de cálculos de cistina."
        },
        {
          "clave": "C",
          "texto": "Alteración del transporte tubular renal de cistina y aminoácidos dibásicos",
          "correcta": true,
          "retroalimentacion": "Correcto. La cistinuria altera la reabsorción de cistina, cuya solubilidad limitada favorece cálculos recurrentes."
        },
        {
          "clave": "D",
          "texto": "Deficiencia de cistationina β-sintasa con acumulación de homocisteína",
          "correcta": false,
          "retroalimentacion": "La homocistinuria clásica se asocia más con alteraciones del cristalino, tejido conjuntivo y riesgo trombótico."
        }
      ],
      "respuesta": "C",
      "explicacion": "En la cistinuria existe una alteración del transporte renal de cistina y aminoácidos dibásicos. La cistina es la forma oxidada de dos moléculas de cisteína unidas por un puente disulfuro; al elevarse su concentración urinaria puede precipitar y formar cálculos. La prueba de cianuro-nitroprusiato es un tamizaje cualitativo, no confirma por sí sola el diagnóstico: para ello se necesitan análisis del cálculo, excreción urinaria de cistina o estudios apropiados. La radiografía simple no debe utilizarse como criterio absoluto para considerar estos cálculos invisibles.",
      "aprendizaje_clave": "Relacionar enlace disulfuro, solubilidad y cistinuria.",
      "fuente_cientifica": "https://www.ncbi.nlm.nih.gov/books/NBK619248/"
    },
    {
      "id": "P06-C03",
      "caso_base": "C05",
      "titulo": "Ectopia lentis y riesgo trombótico",
      "tema": "Metionina, homocisteína y transulfuración",
      "experimentos": [
        5
      ],
      "dificultad": "intermedio",
      "relacion_practica": "El experimento reconoce aminoácidos azufrados; el caso profundiza en una ruta metabólica que conecta metionina, homocisteína y cisteína.",
      "enunciado": "Un niño presenta extremidades largas, dedos finos, alteraciones del desarrollo y desplazamiento del cristalino (ectopia lentis). El equipo médico considera un trastorno hereditario asociado con riesgo de trombosis. ¿Qué defecto enzimático es el más característico de la homocistinuria clásica?",
      "datos": [
        "Fenotipo marfanoide",
        "Ectopia lentis",
        "Alteraciones del desarrollo",
        "No se proporcionaron cifras de homocisteína ni metionina"
      ],
      "opciones": [
        {
          "clave": "A",
          "texto": "Deficiencia de cistationina β-sintasa",
          "correcta": true,
          "retroalimentacion": "Correcto. Esta enzima dependiente de vitamina B6 permite convertir homocisteína en cistationina durante la transulfuración."
        },
        {
          "clave": "B",
          "texto": "Deficiencia de fenilalanina hidroxilasa",
          "correcta": false,
          "retroalimentacion": "La deficiencia de esa enzima se asocia con hiperfenilalaninemia y riesgo de daño neurológico."
        },
        {
          "clave": "C",
          "texto": "Alteración del transportador renal de cistina",
          "correcta": false,
          "retroalimentacion": "La cistinuria se manifiesta principalmente por litiasis renal recurrente."
        },
        {
          "clave": "D",
          "texto": "Defecto de las cadenas alfa de la hemoglobina",
          "correcta": false,
          "retroalimentacion": "Ese defecto produce alfa-talasemia, un trastorno hematológico distinto."
        }
      ],
      "respuesta": "A",
      "explicacion": "La homocistinuria clásica suele deberse a deficiencia de cistationina β-sintasa (CBS), enzima dependiente de piridoxal fosfato, la forma activa de la vitamina B6. La homocisteína elevada se asocia con trastornos del tejido conjuntivo y riesgo vascular. Para sustentar el diagnóstico deben solicitarse homocisteína plasmática total y perfil de aminoácidos, entre otras evaluaciones. La respuesta a piridoxina se estudia clínicamente; folato y vitamina B12 pueden tener funciones complementarias según la situación metabólica. El aspecto marfanoide, por sí solo, no confirma homocistinuria.",
      "aprendizaje_clave": "Diferenciar cistina de homocisteína y comprender el papel de la vitamina B6.",
      "fuente_cientifica": "https://www.ncbi.nlm.nih.gov/books/NBK1524/"
    },
    {
      "id": "P06-C04",
      "caso_base": "C06",
      "titulo": "Un lactante con alteración de un aminoácido aromático",
      "tema": "Fenilalanina, tirosina y fenilcetonuria",
      "experimentos": [
        4
      ],
      "dificultad": "básico-intermedio",
      "relacion_practica": "La fenilalanina y la tirosina tienen anillos aromáticos; el caso es una aplicación metabólica conceptual, no una utilización diagnóstica de la reacción xantoproteica.",
      "enunciado": "Un lactante sin tamizaje neonatal documentado presenta retraso del desarrollo, eccema, convulsiones y pigmentación clara. Se sospecha una alteración de la conversión de fenilalanina en tirosina. ¿Qué medida nutricional es central en el tratamiento de la forma clásica de esta enfermedad?",
      "datos": [
        "Retraso del desarrollo, convulsiones y eccema",
        "Piel y ojos claros",
        "Concentración de fenilalanina: no proporcionada",
        "Tamizaje neonatal: no documentado"
      ],
      "opciones": [
        {
          "clave": "A",
          "texto": "Eliminar por completo fenilalanina y tirosina de la alimentación",
          "correcta": false,
          "retroalimentacion": "La fenilalanina es un aminoácido esencial: se controla su aporte, pero no se elimina por completo; la tirosina puede requerir aporte."
        },
        {
          "clave": "B",
          "texto": "Aumentar el consumo de metionina para activar la vía de transulfuración",
          "correcta": false,
          "retroalimentacion": "La metionina participa en el metabolismo de compuestos azufrados y no corrige la deficiencia de fenilalanina hidroxilasa."
        },
        {
          "clave": "C",
          "texto": "Administrar hierro como única intervención",
          "correcta": false,
          "retroalimentacion": "El hierro es esencial para la síntesis de hemo, pero no reduce la hiperfenilalaninemia."
        },
        {
          "clave": "D",
          "texto": "Controlar estrictamente el aporte de fenilalanina y asegurar nutrición especializada",
          "correcta": true,
          "retroalimentacion": "Correcto. La dieta monitorizada con fenilalanina controlada y fórmulas metabólicas especializadas evita la acumulación neurotóxica."
        }
      ],
      "respuesta": "D",
      "explicacion": "La fenilalanina hidroxilasa convierte fenilalanina en tirosina, con participación del cofactor tetrahidrobiopterina. En la fenilcetonuria asociada con deficiencia de esta enzima, la fenilalanina elevada causa neurotoxicidad; la intervención es temprana, individualizada y monitorizada. Como la fenilalanina es esencial, no debe suprimirse completamente. La reacción xantoproteica identifica la presencia de anillos aromáticos mediante nitración en condiciones de laboratorio, pero no es una prueba clínica de fenilcetonuria.",
      "aprendizaje_clave": "Relacionar estructura aromática, metabolismo y control dietético de fenilalanina.",
      "fuente_cientifica": "https://www.ncbi.nlm.nih.gov/books/NBK1504/"
    },
    {
      "id": "P06-C05",
      "caso_base": "C08",
      "titulo": "Anemia microcítica y formación del grupo hemo",
      "tema": "Hemoglobina y ferropenia",
      "experimentos": [
        6,
        7
      ],
      "dificultad": "básico-intermedio",
      "relacion_practica": "Los experimentos de hemoglobina y hematocrito se interpretan como indicadores de la masa eritrocitaria y de la capacidad de transporte de oxígeno.",
      "enunciado": "Una paciente presenta palidez, fatiga y queilitis angular. Su hemograma revela hemoglobina disminuida, eritrocitos pequeños y anisocitosis. El índice de Mentzer calculado orienta hacia ferropenia. ¿Qué alteración bioquímica explica principalmente la reducción de hemoglobina?",
      "datos": [
        "Hemoglobina: 10,3 g/dL",
        "VCM: 74 fL (equivale a 74 µm³)",
        "Eritrocitos: 3,7 millones/µL",
        "Índice de Mentzer: 74 / 3,7 = 20",
        "Ferritina y saturación de transferrina: no proporcionadas"
      ],
      "opciones": [
        {
          "clave": "A",
          "texto": "Destrucción autoinmunitaria de eritrocitos con liberación de hemoglobina",
          "correcta": false,
          "retroalimentacion": "La hemólisis autoinmunitaria suele requerir evidencias de destrucción eritrocitaria, no solo microcitosis y un índice orientador de ferropenia."
        },
        {
          "clave": "B",
          "texto": "Aporte insuficiente de hierro para la síntesis del grupo hemo",
          "correcta": true,
          "retroalimentacion": "Correcto. La deficiencia de hierro limita la incorporación de Fe²⁺ a la protoporfirina IX y reduce la formación de hemo."
        },
        {
          "clave": "C",
          "texto": "Inactivación de la cistationina β-sintasa",
          "correcta": false,
          "retroalimentacion": "Esa enzima participa en el metabolismo de homocisteína, no en la síntesis normal del grupo hemo."
        },
        {
          "clave": "D",
          "texto": "Activación sistémica de la cascada de coagulación",
          "correcta": false,
          "retroalimentacion": "La coagulación intravascular diseminada causa un patrón de consumo de plaquetas y factores, diferente del descrito."
        }
      ],
      "respuesta": "B",
      "explicacion": "El hierro ferroso es incorporado a la protoporfirina IX por la ferroquelatasa para formar el grupo hemo. Su carencia disminuye la síntesis de hemoglobina y favorece microcitosis e hipocromía. El índice de Mentzer se obtiene dividiendo VCM entre el recuento de eritrocitos expresado en millones/µL; aquí vale 20, orientador, pero insuficiente para confirmar ferropenia. Se necesitan ferritina y otros parámetros de hierro para consolidar el diagnóstico. El hematocrito aporta una medida complementaria del volumen ocupado por eritrocitos.",
      "aprendizaje_clave": "Interpretar hemoglobina, VCM e índice de Mentzer y reconocer sus limitaciones.",
      "fuente_cientifica": "https://www.merckmanuals.com/professional/hematology/anemias-caused-by-deficient-erythropoiesis/iron-deficiency-anemia"
    },
    {
      "id": "P06-C06",
      "caso_base": "C09",
      "titulo": "Tres genes alfa afectados: ¿qué hemoglobinopatía?",
      "tema": "Síntesis de globinas y alfa-talasemia",
      "experimentos": [
        6,
        7
      ],
      "dificultad": "intermedio",
      "relacion_practica": "El caso ilustra cómo la cantidad y composición de las cadenas globínicas influyen en la concentración y función de la hemoglobina.",
      "enunciado": "Un recién nacido presenta anemia microcítica, ictericia y aumento del tamaño del hígado y el bazo. Un estudio molecular identifica la deleción o inactivación de tres de los cuatro genes funcionales de alfa-globina. ¿Qué enfermedad se asocia clásicamente con este genotipo?",
      "datos": [
        "Hemoglobina: 10,6 g/dL",
        "VCM: 73 fL",
        "Tres genes de alfa-globina delecionados o inactivados",
        "Ictericia y hepatoesplenomegalia"
      ],
      "opciones": [
        {
          "clave": "A",
          "texto": "Rasgo alfa-talásémico por pérdida de un solo gen alfa",
          "correcta": false,
          "retroalimentacion": "Una sola deleción suele causar un portador silencioso y no equivale a la pérdida de tres genes."
        },
        {
          "clave": "B",
          "texto": "Síndrome de hidropesía fetal por hemoglobina Bart, con ausencia de los cuatro genes alfa",
          "correcta": false,
          "retroalimentacion": "Ese síndrome se asocia típicamente con pérdida de las cuatro copias de alfa-globina, no de tres."
        },
        {
          "clave": "C",
          "texto": "Enfermedad por hemoglobina H (alfa-talasemia intermedia)",
          "correcta": true,
          "retroalimentacion": "Correcto. La afectación de tres genes alfa caracteriza la enfermedad por HbH; en el neonato puede detectarse especialmente Hb Bart (γ₄)."
        },
        {
          "clave": "D",
          "texto": "Enfermedad de células falciformes por variante de beta-globina",
          "correcta": false,
          "retroalimentacion": "La anemia falciforme implica una alteración de la beta-globina, no deleción de tres genes alfa."
        }
      ],
      "respuesta": "C",
      "explicacion": "La persona dispone normalmente de cuatro copias funcionales de genes alfa-globina. La pérdida de tres produce enfermedad por HbH, con síntesis insuficiente de cadenas alfa y formación de tetrámeros anómalos. La HbH está compuesta por cuatro cadenas beta (β₄) y predomina después del periodo neonatal; al nacimiento puede encontrarse hemoglobina Bart (γ₄), porque la síntesis de cadenas gamma es importante en esa etapa. Estos tetrámeros presentan afinidad por el oxígeno y comportamiento alterados, con anemia y hemólisis.",
      "aprendizaje_clave": "Distinguir HbH (β₄) de Hb Bart (γ₄) y relacionarlas con tres o cuatro genes alfa afectados.",
      "fuente_cientifica": "https://www.ncbi.nlm.nih.gov/books/NBK1435/"
    },
    {
      "id": "P06-C07",
      "caso_base": "C11",
      "titulo": "Esteatorrea, hematomas y TP prolongado",
      "tema": "Vitamina K y factores de coagulación",
      "experimentos": [
        8
      ],
      "dificultad": "intermedio",
      "relacion_practica": "El tiempo de protrombina estudia la vía extrínseca y la vía común; la vitamina K interviene en la maduración funcional de varios factores proteicos.",
      "enunciado": "Un paciente con dificultades crónicas para absorber grasas presenta heces voluminosas y grasosas, equimosis y crecimiento deficiente. Las pruebas de coagulación muestran prolongación tanto del tiempo de protrombina como del TTPa, con tiempo de sangrado normal. ¿Qué deficiencia explica mejor este patrón?",
      "datos": [
        "Tiempo de protrombina (TP): 24 s",
        "TTPa: 45 s",
        "Tiempo de sangrado: normal",
        "Esteatorrea y equimosis",
        "INR: no proporcionado"
      ],
      "opciones": [
        {
          "clave": "A",
          "texto": "Déficit de vitamina K, con menor γ-carboxilación de los factores II, VII, IX y X",
          "correcta": true,
          "retroalimentacion": "Correcto. La vitamina K es liposoluble y necesaria para que estos factores se unan de forma funcional a superficies fosfolipídicas dependientes de calcio."
        },
        {
          "clave": "B",
          "texto": "Déficit aislado del factor VIII, que prolonga por igual TP y TTPa",
          "correcta": false,
          "retroalimentacion": "La deficiencia aislada de factor VIII prolonga principalmente el TTPa, mientras el TP suele permanecer normal."
        },
        {
          "clave": "C",
          "texto": "Defecto plaquetario primario como única causa del TP prolongado",
          "correcta": false,
          "retroalimentacion": "La alteración primaria de plaquetas no explica por sí sola el aumento de TP y TTPa."
        },
        {
          "clave": "D",
          "texto": "Déficit de vitamina C con falla directa de la cascada extrínseca",
          "correcta": false,
          "retroalimentacion": "La vitamina C es importante para el colágeno; su déficit no causa directamente este patrón de pruebas de coagulación."
        }
      ],
      "respuesta": "A",
      "explicacion": "La malabsorción de grasas puede reducir la absorción de vitamina K. Esta vitamina participa en la γ-carboxilación de residuos de glutamato en los factores II, VII, IX y X y en las proteínas C y S. El factor VII tiene una vida media corta, por lo que el TP suele alterarse tempranamente; si el déficit se intensifica, también puede prolongarse el TTPa. Un tiempo de sangrado normal es compatible con conservación relativa de la hemostasia primaria. La interpretación clínica exige valorar también hepatopatía y fármacos.",
      "aprendizaje_clave": "Relacionar absorción intestinal, modificación postraduccional de proteínas y TP/INR.",
      "fuente_cientifica": "https://www.merckmanuals.com/es-us/professional/trastornos-nutricionales/deficiencia-dependencia-e-intoxicaci%C3%B3n-vitam%C3%ADnica/deficiencia-de-vitamina-k"
    },
    {
      "id": "P06-C08",
      "caso_base": "C12",
      "titulo": "Hemartrosis recurrente y TTPa prolongado",
      "tema": "Vías intrínseca y extrínseca de la coagulación",
      "experimentos": [
        8
      ],
      "dificultad": "básico-intermedio",
      "relacion_practica": "Se estudia el TP; este caso enseña a diferenciar qué vía explora el TP frente a la explorada por TTPa.",
      "enunciado": "Un niño con antecedentes familiares de sangrado presenta hemartrosis recurrente en el codo. El hemograma muestra plaquetas conservadas, pero el TTPa está muy prolongado. ¿Qué deficiencia es más compatible con estos datos?",
      "datos": [
        "Plaquetas: 200 000/µL",
        "TTPa: 62 s",
        "Tiempo de sangrado: 5 min",
        "Tiempo de protrombina: no proporcionado",
        "Hemartrosis recurrente"
      ],
      "opciones": [
        {
          "clave": "A",
          "texto": "Deficiencia aislada de factor VII",
          "correcta": false,
          "retroalimentacion": "El factor VII pertenece a la vía extrínseca: su deficiencia afecta sobre todo al TP."
        },
        {
          "clave": "B",
          "texto": "Reducción grave de plaquetas circulantes",
          "correcta": false,
          "retroalimentacion": "El recuento informado de plaquetas es normal y no explica el TTPa prolongado."
        },
        {
          "clave": "C",
          "texto": "Déficit nutricional de hierro",
          "correcta": false,
          "retroalimentacion": "La deficiencia de hierro se manifiesta con alteraciones de la serie roja y no causa de forma característica hemartrosis con TTPa prolongado."
        },
        {
          "clave": "D",
          "texto": "Deficiencia de factor VIII, compatible con hemofilia A",
          "correcta": true,
          "retroalimentacion": "Correcto. El factor VIII es parte del complejo tenasa de la vía intrínseca y su deficiencia puede causar hemorragias articulares."
        }
      ],
      "respuesta": "D",
      "explicacion": "La hemofilia A es un defecto del factor VIII. El TTPa explora las vías intrínseca y común y se prolonga con deficiencias importantes de factor VIII; el TP suele ser normal, aunque en este resumen no fue medido o comunicado. El sangrado profundo, en especial la hemartrosis, orienta a un defecto de coagulación plasmática más que a un trastorno aislado de plaquetas. La confirmación requiere actividad de factor VIII y valoración clínica específica.",
      "aprendizaje_clave": "Diferenciar TP (extrínseca/común) de TTPa (intrínseca/común).",
      "fuente_cientifica": "https://www.merckmanuals.com/es-us/professional/hematolog%C3%ADa/trastornos-de-coagulaci%C3%B3n/hemofilia"
    },
    {
      "id": "P06-C09",
      "caso_base": "C13",
      "titulo": "Sangrado en sitios de punción durante una sepsis",
      "tema": "Coagulación intravascular diseminada",
      "experimentos": [
        8
      ],
      "dificultad": "intermedio",
      "relacion_practica": "El TP se altera cuando se consumen factores de coagulación. La CID ilustra el papel sistémico de estas proteínas en hemostasia y trombosis.",
      "enunciado": "Un paciente hospitalizado por pancreatitis aguda evoluciona con sepsis y presenta petequias, equimosis y sangrado en sitios de punción. El frotis revela esquistocitos y el hemograma muestra trombocitopenia. ¿Qué mecanismo unifica mejor los hallazgos?",
      "datos": [
        "Antecedente: pancreatitis aguda y sepsis",
        "Plaquetas disminuidas (sin cifra proporcionada)",
        "Esquistocitos en sangre periférica",
        "Sangrado en zonas de acceso venoso",
        "TP, TTPa, fibrinógeno y dímero D: sin cifras originales"
      ],
      "opciones": [
        {
          "clave": "A",
          "texto": "Deficiencia hereditaria aislada de factor VIII",
          "correcta": false,
          "retroalimentacion": "La hemofilia A no justifica trombocitopenia y esquistocitos en el contexto de sepsis."
        },
        {
          "clave": "B",
          "texto": "Activación sistémica de la coagulación con consumo de plaquetas y factores",
          "correcta": true,
          "retroalimentacion": "Correcto. La coagulación intravascular diseminada puede producir microtrombos, esquistocitos y coagulopatía por consumo."
        },
        {
          "clave": "C",
          "texto": "Deficiencia aislada de hierro con disminución del grupo hemo",
          "correcta": false,
          "retroalimentacion": "La ferropenia causa anemia microcítica, no consumo de factores y sangrado en múltiples puntos de punción."
        },
        {
          "clave": "D",
          "texto": "Trastorno limitado a la síntesis de una cadena de globina",
          "correcta": false,
          "retroalimentacion": "Una talasemia puede afectar hemoglobina y eritrocitos, pero no explica el cuadro agudo de coagulación sistémica."
        }
      ],
      "respuesta": "B",
      "explicacion": "La coagulación intravascular diseminada (CID) es un proceso secundario a agresiones como la sepsis. Se activa extensamente la coagulación, se forman depósitos de fibrina en la microcirculación y se consumen plaquetas y factores. Los glóbulos rojos pueden fragmentarse al pasar por vasos con microtrombos y originar esquistocitos. Para evaluar una CID se solicitan TP, TTPa, fibrinógeno y dímero D, además de recuento plaquetario y frotis. En la forma rápidamente evolutiva suelen elevarse TP/TTPa, reducirse fibrinógeno y aumentar dímero D; aquí no se asignan números que no estuvieron en el material original.",
      "aprendizaje_clave": "Comprender la coagulopatía de consumo y saber qué parámetros se deben solicitar.",
      "fuente_cientifica": "https://www.merckmanuals.com/professional/hematology/coagulation-disorders/disseminated-intravascular-coagulation-dic"
    },
    {
      "id": "P06-C10",
      "caso_base": "C15",
      "titulo": "Hemólisis después de un antibiótico: defensa antioxidante",
      "tema": "G6PD, NADPH y glutatión reducido",
      "experimentos": [
        5,
        6,
        7
      ],
      "dificultad": "intermedio",
      "relacion_practica": "Se conecta la protección de grupos sulfhidrilo de proteínas y glutatión con la estabilidad de la hemoglobina y las pruebas hematológicas.",
      "enunciado": "Un paciente presenta ictericia y orina oscura después de recibir trimetoprim-sulfametoxazol. La analítica muestra anemia, bilirrubina elevada y haptoglobina disminuida. ¿Qué alteración bioquímica reduce la capacidad de los eritrocitos para neutralizar el estrés oxidativo?",
      "datos": [
        "Hemoglobina: 10 g/dL",
        "Bilirrubina total: 3 mg/dL",
        "Haptoglobina: 20 mg/dL",
        "Reticulocitos: 3 %",
        "Hemoglobinuria referida"
      ],
      "opciones": [
        {
          "clave": "A",
          "texto": "Deficiencia de piruvato quinasa con menor producción de ATP",
          "correcta": false,
          "retroalimentacion": "Puede causar hemólisis por déficit energético, pero el problema característico de defensa antioxidante es diferente."
        },
        {
          "clave": "B",
          "texto": "Deficiencia de factor VII con menor actividad de la vía extrínseca",
          "correcta": false,
          "retroalimentacion": "El factor VII pertenece a la coagulación y no explica la susceptibilidad oxidativa eritrocitaria."
        },
        {
          "clave": "C",
          "texto": "Deficiencia de G6PD con menor NADPH y regeneración de glutatión reducido",
          "correcta": true,
          "retroalimentacion": "Correcto. La vía de las pentosas fosfato es esencial para producir el NADPH que mantiene el glutatión en forma reducida."
        },
        {
          "clave": "D",
          "texto": "Deficiencia de albúmina plasmática con reducción de presión oncótica",
          "correcta": false,
          "retroalimentacion": "La hipoalbuminemia se relaciona con edema, no con este mecanismo de hemólisis oxidativa."
        }
      ],
      "respuesta": "C",
      "explicacion": "La glucosa-6-fosfato deshidrogenasa cataliza un paso inicial de la vía de las pentosas fosfato, que genera NADPH. El NADPH permite la regeneración de glutatión reducido (GSH), protector frente a especies reactivas de oxígeno. Si falta G6PD, algunas infecciones o fármacos oxidantes pueden precipitar hemólisis. El daño oxidativo compromete hemoglobina y membrana eritrocitaria. El cuadro orienta a esta deficiencia, pero confirmarla requiere una prueba de actividad enzimática interpretada según el momento clínico.",
      "aprendizaje_clave": "Conectar G6PD, glutatión, grupos tiol y hemólisis oxidativa.",
      "fuente_cientifica": "https://medlineplus.gov/genetics/condition/glucose-6-phosphate-dehydrogenase-deficiency/"
    }
  ],
  "flashcards": [
    {
      "id": "P06-F01",
      "categoria": "proteinas",
      "tema": "Enlace peptídico",
      "pregunta": "¿Qué grupos químicos participan en la formación de un enlace peptídico?",
      "respuesta": "El grupo carboxilo de un aminoácido y el grupo amino de otro; se libera una molécula de agua.",
      "explicacion": "La unión –CO–NH– forma la estructura primaria y explica la detección de cadenas peptídicas por Biuret.",
      "experimentos": [
        3
      ],
      "dificultad": "básico",
      "fuente_anki": "BIOQUIMICA(1).apkg",
      "nota_anki": "1772571654508",
      "nota_editorial": "Traducida del portugués y reformulada como pregunta directa."
    },
    {
      "id": "P06-F02",
      "categoria": "proteinas",
      "tema": "Desnaturalización",
      "pregunta": "¿Qué ocurre con una proteína al desnaturalizarse?",
      "respuesta": "Pierde su conformación tridimensional nativa y generalmente su actividad biológica, sin romper necesariamente los enlaces peptídicos.",
      "explicacion": "Se alteran interacciones estabilizadoras de las estructuras secundaria, terciaria o cuaternaria; la estructura primaria puede permanecer intacta.",
      "experimentos": [
        1,
        2
      ],
      "dificultad": "básico",
      "fuente_anki": "BIOQUIMICA(1).apkg",
      "nota_anki": "1772582230618",
      "nota_editorial": "Traducida del portugués; se precisó que el enlace peptídico no se rompe necesariamente."
    },
    {
      "id": "P06-F03",
      "categoria": "proteinas",
      "tema": "Factores de desnaturalización",
      "pregunta": "¿Qué dos condiciones suelen desnaturalizar proteínas?",
      "respuesta": "Temperaturas elevadas y cambios extremos de pH.",
      "explicacion": "La temperatura altera interacciones débiles y los cambios de pH modifican la ionización y las interacciones electrostáticas.",
      "experimentos": [
        1,
        2
      ],
      "dificultad": "básico",
      "fuente_anki": "BIOQUIMICA(1).apkg",
      "nota_anki": "1772582428447",
      "nota_editorial": "Traducida del portugués y matizada: depende de la proteína y del medio."
    },
    {
      "id": "P06-F04",
      "categoria": "aromaticos",
      "tema": "Aminoácidos aromáticos",
      "pregunta": "¿Cuáles son los tres aminoácidos proteicos con anillos aromáticos?",
      "respuesta": "Fenilalanina, tirosina y triptófano.",
      "explicacion": "Sus anillos aromáticos permiten reacciones químicas características; la intensidad de la reacción xantoproteica depende del residuo y de las condiciones.",
      "experimentos": [
        4
      ],
      "dificultad": "básico",
      "fuente_anki": "BIOQUIMICA_TOTAL(1).apkg",
      "nota_anki": "1636651520773"
    },
    {
      "id": "P06-F05",
      "categoria": "azufrados",
      "tema": "Aminoácidos con azufre",
      "pregunta": "¿Qué aminoácidos proteicos contienen azufre?",
      "respuesta": "Cisteína y metionina.",
      "explicacion": "La cisteína posee un grupo tiol (–SH); la metionina contiene un tioéter y participa en el metabolismo de un carbono como precursor de S-adenosilmetionina.",
      "experimentos": [
        5
      ],
      "dificultad": "básico",
      "fuente_anki": "BIOQUIMICA_TOTAL(1).apkg",
      "nota_anki": "1636653788382"
    },
    {
      "id": "P06-F06",
      "categoria": "azufrados",
      "tema": "Cistina",
      "pregunta": "¿Cómo se forma la cistina?",
      "respuesta": "Por oxidación y unión de dos residuos de cisteína mediante un enlace disulfuro (–S–S–).",
      "explicacion": "El enlace disulfuro es covalente; la cistina libre es poco soluble en orina ácida y puede originar cálculos.",
      "experimentos": [
        5
      ],
      "dificultad": "intermedio",
      "fuente_anki": "BIOQUIMICA_TOTAL(1).apkg",
      "nota_anki": "1636654128711"
    },
    {
      "id": "P06-F07",
      "categoria": "azufrados",
      "tema": "Puentes disulfuro",
      "pregunta": "¿Qué interacción covalente estabiliza la conformación de muchas proteínas a partir de dos grupos –SH?",
      "respuesta": "Un puente disulfuro entre dos residuos de cisteína.",
      "explicacion": "La oxidación de los tioles forma el enlace –S–S–, importante para estabilizar estructuras terciarias y algunas cuaternarias.",
      "experimentos": [
        1,
        5
      ],
      "dificultad": "intermedio",
      "fuente_anki": "BIOQUIMICA_TOTAL(1).apkg",
      "nota_anki": "1609700887599"
    },
    {
      "id": "P06-F08",
      "categoria": "azufrados",
      "tema": "Cistinuria",
      "pregunta": "¿Cuál es el defecto principal de transporte en la cistinuria?",
      "respuesta": "Defecto en la reabsorción renal de cistina y aminoácidos dibásicos (ornitina, lisina y arginina).",
      "explicacion": "La excreción elevada de cistina favorece cristales y cálculos urinarios por su baja solubilidad.",
      "experimentos": [
        5
      ],
      "dificultad": "intermedio",
      "fuente_anki": "BIOQUIMICA_TOTAL(1).apkg",
      "nota_anki": "1577577637924"
    },
    {
      "id": "P06-F09",
      "categoria": "azufrados",
      "tema": "Homocistinuria clásica",
      "pregunta": "¿Qué enzima suele estar deficiente en la homocistinuria clásica?",
      "respuesta": "Cistationina β-sintasa (CBS).",
      "explicacion": "Impide la transulfuración normal de homocisteína hacia cistationina, eleva homocisteína y aumenta el riesgo de trombosis, ectopia del cristalino y alteraciones esqueléticas.",
      "experimentos": [
        5
      ],
      "dificultad": "intermedio",
      "fuente_anki": "BIOQUIMICA_TOTAL(1).apkg",
      "nota_anki": "1577699421873",
      "nota_editorial": "Se corrigió la explicación clínica imprecisa de la tarjeta fuente."
    },
    {
      "id": "P06-F10",
      "categoria": "hemoglobina",
      "tema": "Hemoglobina adulta HbA",
      "pregunta": "¿Cómo se organizan las cadenas de la hemoglobina A (HbA) adulta?",
      "respuesta": "Es un tetrámero α₂β₂: dos cadenas alfa y dos beta.",
      "explicacion": "Su estructura cuaternaria posibilita la unión cooperativa al oxígeno; existen otras variantes de hemoglobina con composición distinta.",
      "experimentos": [
        6,
        7
      ],
      "dificultad": "básico",
      "fuente_anki": "BIOQUIMICA_TOTAL(1).apkg",
      "nota_anki": "1611768465040",
      "nota_editorial": "Se precisó que α₂β₂ corresponde específicamente a HbA."
    },
    {
      "id": "P06-F11",
      "categoria": "hemoglobina",
      "tema": "Grupo hemo",
      "pregunta": "¿Qué dos componentes constituyen el grupo hemo de la hemoglobina?",
      "respuesta": "Protoporfirina IX y hierro ferroso (Fe²⁺).",
      "explicacion": "El Fe²⁺ del hemo se une de manera reversible al oxígeno; la oxidación a Fe³⁺ genera metahemoglobina con menor capacidad funcional de transportar O₂.",
      "experimentos": [
        6,
        7
      ],
      "dificultad": "básico",
      "fuente_anki": "BIOQUIMICA_TOTAL(1).apkg",
      "nota_anki": "1611769077140"
    },
    {
      "id": "P06-F12",
      "categoria": "proteinas",
      "tema": "Suero y plasma",
      "pregunta": "¿Qué diferencia básica existe entre suero y plasma sanguíneo?",
      "respuesta": "El suero es el líquido obtenido tras la coagulación y carece de fibrinógeno funcional; el plasma se obtiene con anticoagulante y conserva fibrinógeno y otros factores.",
      "explicacion": "La afirmación de Anki «plasma desprovisto de factores» es una simplificación: algunos factores pueden permanecer en el suero, aunque otros se consumen o activan durante la coagulación.",
      "experimentos": [
        3,
        8
      ],
      "dificultad": "intermedio",
      "fuente_anki": "bioquimica_general(1).apkg",
      "nota_anki": "1672872130966",
      "nota_editorial": "Se corrigió el carácter absoluto de la tarjeta original."
    },
    {
      "id": "P06-F13",
      "categoria": "coagulacion",
      "tema": "γ-carboxilación",
      "pregunta": "¿Qué modificación de residuos de glutamato permite que la protrombina se una a calcio?",
      "respuesta": "La γ-carboxilación dependiente de vitamina K.",
      "explicacion": "Los residuos de γ-carboxiglutamato favorecen la unión de Ca²⁺ y el ensamblaje de complejos de coagulación sobre membranas fosfolipídicas.",
      "experimentos": [
        8
      ],
      "dificultad": "intermedio",
      "fuente_anki": "bioquimica_general(1).apkg",
      "nota_anki": "1668017481741"
    },
    {
      "id": "P06-F14",
      "categoria": "coagulacion",
      "tema": "Factores vitamina K",
      "pregunta": "¿Qué factores de coagulación dependen de vitamina K para su γ-carboxilación?",
      "respuesta": "Los factores II, VII, IX y X; también las proteínas reguladoras C y S (y la proteína Z).",
      "explicacion": "La vitamina K reducida es cofactor de la γ-glutamil carboxilasa. El factor VIII NO es vitamina K dependiente. Se corrigió expresamente la tarjeta fuente, que incluía VIII y IIa de forma errónea.",
      "experimentos": [
        8
      ],
      "dificultad": "intermedio",
      "fuente_anki": "BIOQUIMICA_TOTAL(1).apkg",
      "nota_anki": "1577747993896",
      "nota_editorial": "CORRECCIÓN CIENTÍFICA: el original enumera factores erróneos y confunde la enzima de carboxilación con el reciclaje de vitamina K."
    },
    {
      "id": "P06-F15",
      "categoria": "coagulacion",
      "tema": "Anticoagulantes orales",
      "pregunta": "¿Cuál es el mecanismo del acenocumarol?",
      "respuesta": "Inhibe el reciclaje de vitamina K mediante VKORC1, reduciendo la γ-carboxilación funcional de factores vitamina K dependientes.",
      "explicacion": "Disminuye la actividad de los factores II, VII, IX y X; su efecto se monitoriza habitualmente mediante tiempo de protrombina/INR.",
      "experimentos": [
        8
      ],
      "dificultad": "intermedio",
      "fuente_anki": "bioquimica_general(1).apkg",
      "nota_anki": "1670792645660"
    }
  ]
};

