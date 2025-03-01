---
title: Caracteristícas Opciones Financieras
description: Caracteristícas Opciones Financieras.
---

Repasaremos las características fundamentales de las opciones y las principales variables a tener en cuenta antes de operar. Es importante dominar estos conceptos antes de pasar a estrategias reales.

---

## 1. **Strike Price (Precio de Ejercicio)**

El *Strike* o precio de ejercicio es el precio al que se puede ejecutar el derecho asociado a la opción (compra o venta). Este es el valor que determina cuándo empezamos a ganar dinero con nuestra operación.

- **Ejemplo**:
  - **Strike**: $150
  - **Prima**: $9.10
  - **Break-Even (punto de equilibrio)**: Strike + Prima = $159.10
  - **Ganancias**: Solo comienzan cuando el precio del subyacente supera el *break-even*.

---

## 2. **Contratos**

Las opciones no representan una sola acción, sino un lote de acciones conocido como contrato. Lo habitual es que un contrato represente 100 acciones, aunque hay excepciones.

- **Ejemplo:**
  - Para Meta Platforms (Facebook): 
    - **1 Contrato = 100 acciones**
    - Exposición total = Strike ($150) × 100 = **$15,000**
  - Para Inditex (Ejemplo específico): 
    - **1 Contrato = 104 acciones** (puede variar según dividendos).

Antes de operar, revisa el multiplicador de cada acción para evitar confusiones.

---

## 3. **Prima**

La prima es el costo de adquirir un derecho o el ingreso por asumir una obligación en una operación con opciones.

- **Características**:
  - Se paga cuando somos compradores (derecho).
  - Se cobra cuando somos vendedores (obligación).
  - **Ejemplo:**
    - Prima: $9.10 por acción.
    - Total: $9.10 × 100 = $910.

> La prima refleja la oferta y demanda en el mercado y cambia con la volatilidad y el tiempo restante hasta el vencimiento.

---

## 4. **Vencimiento**

El vencimiento es la fecha límite en la que:
- Los compradores pueden ejercer su derecho.
- Los vendedores cumplen su obligación.

### Tipos de vencimientos:
1. **Mensuales:** Para compañías más líquidas y grandes.
2. **Trimestrales o personalizadas:** Dependiendo de la acción.

> Es habitual cerrar posiciones antes del vencimiento para gestionar el riesgo o capturar ganancias parciales.

---

## 5. **Exposición y Apalancamiento**

El apalancamiento es uno de los grandes atractivos de las opciones, pero también conlleva riesgos significativos.

- **Ejemplo:**
  - Con una prima de $910, controlas una exposición de $15,000 (1 contrato de Meta Platforms con Strike $150).
  - Esto significa que con una pequeña inversión (prima), puedes obtener beneficios de un subyacente mucho mayor.

> **Advertencia:** Aunque el apalancamiento puede ofrecer altos rendimientos, el riesgo de perder la prima es elevado, especialmente en estrategias especulativas a corto plazo.

---

## 6. **Cálculo de Beneficios y Pérdidas**

- **Para Compradores de CALL**:
  - Ganancia: Inicia cuando el precio del subyacente supera el **Strike + Prima**.
  - Pérdida: Limitada al monto de la prima.

- **Para Vendedores de PUT**:
  - Ganancia: Limitada a la prima recibida.
  - Pérdida: Potencialmente ilimitada si el precio del subyacente cae drásticamente.

---

## Ejemplo de Operación

1. **Compra de CALL:**
   - Subyacente: Meta Platforms
   - Strike: $150
   - Prima: $9.10
   - Vencimiento: 20/01/2023
   - Exposición total: $15,000

   - **Escenarios:**
     - Si el precio en enero 2023 es $160 → Ganancia neta: $910 (descontando la prima).
     - Si el precio se mantiene por debajo de $150 → Pérdida total: $910 (prima).

2. **Venta de PUT:**
   - Strike: $150
   - Prima: $9.10
   - Si el precio cae a $140, el vendedor debe comprar las acciones a $150 y su pérdida es proporcional al descuento con respecto al *break-even*.

---

### Reflexión Final

Antes de operar con opciones:
- Comprende cada una de estas variables y cómo impactan en tus estrategias.
- Define tus objetivos: ¿Especulación, cobertura o ingresos pasivos?
- Revisa siempre los multiplicadores, primas y vencimientos para ajustar la estrategia a tu perfil de riesgo.

> ¡La práctica será clave para dominar estas herramientas!

---

# **El Precio de la Opción: La Prima**

La **prima** es el precio de una opción y está compuesta por dos componentes principales:
1. **Valor Intrínseco.**
2. **Valor Temporal (o extrínseco).**

Entender cómo se calculan y qué representan es esencial para operar con opciones de forma eficiente y estratégica.

---

## **1. Valor Intrínseco**
El valor intrínseco refleja el beneficio inmediato que obtendrías si la opción se ejerciera en ese momento. Depende de la relación entre el precio del activo subyacente y el precio de ejercicio (*Strike Price*).

### **Cálculo**:
- **Para una opción CALL**:  
  `Valor Intrínseco = Precio del Subyacente - Precio de Ejercicio`  
  *(Si el resultado es negativo, se considera 0).*

- **Para una opción PUT**:  
  `Valor Intrínseco = Precio de Ejercicio - Precio del Subyacente`  
  *(Si el resultado es negativo, se considera 0).*

### **Ejemplo de una opción CALL**:
- **Subyacente**: $133  
- **Strike**: $125  
- **Cálculo**:  
  `Valor Intrínseco = 133 - 125 = $8.11`

### **Reglas del Valor Intrínseco**:
1. Nunca puede ser negativo; si lo es, se considera **0**.
2. Sólo tiene valor si la opción está *"In the Money"*:
   - **CALL**: Precio del subyacente > Strike.
   - **PUT**: Precio del subyacente < Strike.

---

## **2. Valor Temporal (o Extrínseco)**
El valor temporal refleja las probabilidades de que la opción gane valor antes de su vencimiento. Es directamente proporcional al tiempo restante hasta el vencimiento.

### **Cálculo**:
`Valor Temporal = Prima - Valor Intrínseco`

### **Ejemplo (CALL con valor temporal):**
- **Prima**: $20.80  
- **Valor Intrínseco**: $8.11  
- **Cálculo**:  
  `Valor Temporal = 20.80 - 8.11 = $12.69`

### **Características del Valor Temporal**:
1. Depende principalmente de:
   - **Tiempo hasta el vencimiento:** Cuanto más tiempo queda, mayor es el valor temporal.
   - **Volatilidad del mercado:** A mayor volatilidad, mayor será el valor temporal.
   - **Otros factores menores:** Dividendos, tasas de interés.
2. **Decae con el tiempo:** Este fenómeno se llama *"Time Decay"* y se acelera a medida que se acerca el vencimiento.

### **Ejemplo (CALL sin valor intrínseco):**
- **Subyacente**: $133  
- **Strike**: $150  
- **Prima**: $9.10  
- **Cálculo**:
  - `Valor Intrínseco = 0` (porque el subyacente < Strike).  
  - `Valor Temporal = 9.10 - 0 = $9.10`  

  Toda la prima es valor temporal.

---

## **Comportamiento del Valor Temporal con el Tiempo**
1. **Al inicio** (lejos del vencimiento):  
   - El valor temporal es alto porque queda mucho tiempo para que el precio del subyacente se mueva.
2. **Cerca del vencimiento**:  
   - El valor temporal disminuye rápidamente (se acerca a **0**) ya que queda poco tiempo para que ocurra un cambio significativo en el precio.

---

## **Casos de Ejemplo**

### **1. CALL "In the Money"**:
- **Subyacente**: $133  
- **Strike**: $125  
- **Prima**: $20.80  
- **Cálculo**:
  - `Valor Intrínseco = 133 - 125 = $8.11`  
  - `Valor Temporal = 20.80 - 8.11 = $12.69`  

  **Resultado**: La opción tiene valor intrínseco y temporal.

### **2. CALL "Out of the Money"**:
- **Subyacente**: $133  
- **Strike**: $150  
- **Prima**: $9.10  
- **Cálculo**:
  - `Valor Intrínseco = 0` (porque el subyacente < Strike).  
  - `Valor Temporal = 9.10 - 0 = $9.10`  

  **Resultado**: Toda la prima es valor temporal, y esta opción es pura especulación.

---

## **Conclusiones Importantes**
1. **La Prima (Precio de la Opción):**  
   Es la suma del valor intrínseco y el valor temporal:

2. **El Valor Temporal Disminuye con el Tiempo:**  
Cuanto más nos acerquemos al vencimiento, menor será el valor temporal de la opción. Al llegar al vencimiento, **el valor temporal será 0**.

3. **Valor Intrínseco vs Valor Temporal:**  
- Las opciones *In the Money* tienen ambos componentes.  
- Las opciones *Out of the Money* dependen totalmente del valor temporal y perderán todo su valor si no alcanzan el strike.

4. **Aplicaciones Estratégicas:**  
- Utilizar opciones con valor temporal alto si se espera un movimiento rápido del precio.
- En coberturas, buscar opciones con valor intrínseco significativo para garantizar protección.

# Profundidad de Mercado

La profundidad de mercado es un concepto clave para entender el comportamiento de las opciones y, en particular, de la **prima**. A continuación, explicamos términos fundamentales relacionados con este concepto.

---

## **Opciones "In the Money" (ITM)**

### **Definición:**
Una opción está *In the Money* cuando tiene **valor intrínseco**. Es decir, ejecutar la opción resulta favorable porque permite comprar o vender a un precio mejor que el precio actual del subyacente.

- **CALL ITM:**  
  El precio del subyacente es **mayor** al Strike.  
  Ejemplo:  
  Si compramos una **CALL** con Strike 130 y el subyacente está en 140:  
  - Valor Intrínseco = 140 - 130 = $10  
  - La opción tiene $10 "dentro del dinero".

- **PUT ITM:**  
  El precio del subyacente es **menor** al Strike.  
  Ejemplo:  
  Si compramos una **PUT** con Strike 140 y el subyacente está en 130:  
  - Valor Intrínseco = 140 - 130 = $10  
  - La opción tiene $10 "dentro del dinero".

---

## **Opciones "Out of the Money" (OTM)**

### **Definición:**
Una opción está *Out of the Money* cuando **no tiene valor intrínseco**. Ejecutar la opción no tiene sentido porque resulta en una pérdida.

- **CALL OTM:**  
  El precio del subyacente es **menor** al Strike.  
  Ejemplo:  
  Si compramos una **CALL** con Strike 150 y el subyacente está en 130:  
  - Valor Intrínseco = 0  
  - La opción está fuera del dinero.

- **PUT OTM:**  
  El precio del subyacente es **mayor** al Strike.  
  Ejemplo:  
  Si compramos una **PUT** con Strike 130 y el subyacente está en 150:  
  - Valor Intrínseco = 0  
  - La opción está fuera del dinero.

---

## **Opciones "At the Money" (ATM)**

### **Definición:**
Una opción está *At the Money* cuando el precio del subyacente es **igual o muy cercano** al Strike. Estas opciones tienen poco o ningún valor intrínseco, pero pueden tener valor temporal.

Ejemplo:  
- Subyacente: $130  
- Strike: $130  
  - Valor Intrínseco ≈ $0  
  - Valor Temporal depende del tiempo restante y volatilidad.

---

## **Impacto del Tiempo en el Valor Temporal**

El **valor temporal** de las opciones depende directamente del tiempo que falta hasta el vencimiento:
- **Opciones ITM:** Tienen tanto valor intrínseco como temporal. El valor temporal disminuye con el tiempo hasta llegar a 0 al vencimiento.
- **Opciones OTM:** Dependen completamente del valor temporal. Si el subyacente no alcanza el Strike, el valor temporal también desaparecerá con el tiempo.

### **Ejemplo de Decadencia del Valor Temporal:**
- **CALL ITM** con Strike 125:  
  - Subyacente: $133  
  - Prima: $20.80  
  - Valor Intrínseco: $8.11  
  - Valor Temporal: $20.80 - $8.11 = $12.69  
  - Conforme se acerca el vencimiento, el valor temporal disminuirá a 0.

- **CALL OTM** con Strike 150:  
  - Subyacente: $133  
  - Prima: $9.10  
  - Valor Intrínseco: $0 (no tiene valor intrínseco).  
  - Valor Temporal: $9.10  
  - Si el subyacente no sube, el valor temporal desaparecerá y la opción valdrá 0.

---

## **Resumen Gráfico de ITM, ATM y OTM**

### **Opciones CALL:**
- **ITM:** Precio del subyacente > Strike → Tiene valor intrínseco y temporal.  
- **ATM:** Precio del subyacente ≈ Strike → Principalmente valor temporal.  
- **OTM:** Precio del subyacente < Strike → Sólo valor temporal (riesgo de perderlo todo).

### **Opciones PUT:**
- **ITM:** Precio del subyacente < Strike → Tiene valor intrínseco y temporal.  
- **ATM:** Precio del subyacente ≈ Strike → Principalmente valor temporal.  
- **OTM:** Precio del subyacente > Strike → Sólo valor temporal (riesgo de perderlo todo).

---

## **Conclusiones Importantes**

1. **Opciones ITM:** Son las únicas con valor intrínseco. El valor intrínseco es la diferencia entre el precio del subyacente y el Strike.  
2. **Opciones ATM y OTM:** Dependen completamente del valor temporal. Este valor disminuye a medida que se acerca el vencimiento.  
3. **Rol del Tiempo:**  
   - Para **compradores**, el tiempo juega en contra porque el valor temporal decae.  
   - Para **vendedores**, el tiempo juega a favor porque el valor temporal se convierte en ganancia.  
4. **Estrategias:**  
   - Buscar ITM para más seguridad y menos especulación.  
   - Buscar OTM para especulación, pero con mayor riesgo de pérdida total.

# Variables que Influyen en la Prima y sus Efectos

## **Factores Principales que Afectan la Prima**
1. **Precio del Subyacente:**  
   - Afecta directamente al **valor intrínseco**.
   - Relación entre precio del subyacente y el precio de ejercicio (Strike) determina si la opción está **ITM (In the Money)**, **OTM (Out of the Money)**, o **ATM (At the Money)**.

2. **Volatilidad del Subyacente:**  
   - La **variable más importante** que afecta el valor temporal.
   - **Alta volatilidad:** Aumenta las primas porque el mercado percibe más incertidumbre.  
   - **Baja volatilidad:** Reduce las primas.

3. **Tiempo hasta el Vencimiento:**  
   - A mayor tiempo, mayor valor temporal de la prima.  
   - El valor temporal disminuye a medida que se acerca el vencimiento.

4. **Tipo de Interés:**  
   - Afecta ligeramente al costo de financiación.  
   - Influencia baja y generalmente insignificante.

5. **Dividendos:**  
   - El reparto de dividendos disminuye la cotización del subyacente.  
   - Impacta dependiendo de si se trata de una opción CALL o PUT.

---

## **Efecto de la Volatilidad**

### **Definición:**
La volatilidad mide la variabilidad del precio del subyacente. Una mayor volatilidad implica un mayor rango de posibles precios futuros.

### **Efectos:**
- **Incremento de Volatilidad:**  
  - **Aumenta las primas:** Más posibilidades de que la opción llegue a ser rentable para el comprador.  
  - Beneficia a los vendedores de opciones, ya que las primas son más altas.

- **Reducción de Volatilidad:**  
  - **Disminuye las primas:** A medida que se reduce la incertidumbre, las opciones pierden valor temporal.  
  - Ejemplo: Si una prima está en $10 y la volatilidad baja, puede reducirse a $7 rápidamente.

### **Volatilidad Implícita vs. Volatilidad Histórica:**
- **Volatilidad Histórica:** Basada en datos pasados.  
- **Volatilidad Implícita:** Refleja las expectativas del mercado sobre la volatilidad futura.  
  - Los brokers suelen mostrar estos datos para facilitar la estimación de primas.

---

## **Efecto del Tipo de Interés**
- Los cambios en los tipos de interés afectan marginalmente las primas.  
- Generalmente, se usa el tipo de interés libre de riesgo como referencia.  
- Influencia baja y no significativa para la mayoría de estrategias de opciones.

---

## **Efecto de los Dividendos**
- Cuando una acción paga dividendos:  
  - Su cotización disminuye por el valor del dividendo pagado.  
  - Esto afecta las primas de opciones CALL y PUT dependiendo de la posición:  
    - **CALL:** Los dividendos reducen su valor.  
    - **PUT:** Los dividendos aumentan su valor.  
- Este impacto será tratado en detalle en el módulo de riesgos.

---

## **Las Griegas**

### **Definición:**
Las griegas son métricas utilizadas para medir cómo cambian las primas de las opciones en función de varias variables como precio, volatilidad, tiempo, etc.

### **Principales Griegas:**

| **Griega** | **Definición**                                                     | **Efecto**                                             |
| ---------- | ------------------------------------------------------------------ | ------------------------------------------------------ |
| **Delta**  | Sensibilidad de la prima ante cambios en el precio del subyacente. | Mide cuánto cambia la prima si el subyacente varía $1. |
| **Gamma**  | Sensibilidad de la Delta ante cambios en el precio del subyacente. | Indica cómo evoluciona la Delta.                       |
| **Vega**   | Sensibilidad de la prima ante cambios en la volatilidad.           | Alta volatilidad aumenta la prima.                     |
| **Theta**  | Sensibilidad de la prima ante el paso del tiempo.                  | La prima disminuye conforme pasa el tiempo.            |
| **Rho**    | Sensibilidad de la prima ante cambios en los tipos de interés.     | Cambios leves, generalmente poco significativos.       |

### **Delta en Detalle:**
- **Definición:**  
  Mide cuánto cambia la prima por cada variación de $1 en el subyacente.  
- **Ejemplo:**  
  - **Strike:** 105  
  - **Delta:** 0.491  
  - **Prima:** $8.25  
  - Si el subyacente sube $1, la nueva prima será:  
    \[
    8.25 + (1 \times 0.491) = 8.74
    \]
  - Si el subyacente baja $1, la nueva prima será:  
    \[
    8.25 - (1 \times 0.491) = 7.76
    \]

- **Probabilidad Implícita:**  
  La Delta también indica la probabilidad de que la opción termine **In the Money**:  
  - **Delta de 0.30:** 30% de probabilidad de acabar ITM.  
  - **Delta de 0.70:** 70% de probabilidad de acabar ITM.

---

## **Resumen de los Efectos**
- **Volatilidad Alta:**  
  - Aumenta primas (ventaja para vendedores).  
- **Tiempo hasta Vencimiento:**  
  - Incrementa el valor temporal.  
- **Dividendos:**  
  - Reducen el precio del subyacente y afectan CALLs negativamente, pero benefician PUTs.  
- **Delta:**  
  - Importante para estimar cambios en la prima y probabilidades ITM.

---

## **Aplicación Práctica**
Las variables explicadas serán fundamentales para diseñar estrategias efectivas con opciones. La clave está en aprovechar momentos de alta volatilidad y entender el comportamiento de la Delta para gestionar el riesgo y maximizar las primas.


