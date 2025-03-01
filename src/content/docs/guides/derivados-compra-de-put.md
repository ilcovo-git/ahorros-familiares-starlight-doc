---
title: Compra de Put
description: Compra de Put
---

La compra de una opción Put otorga el **derecho** (pero no la obligación) de vender un activo subyacente a un precio predeterminado (Strike) antes o en la fecha de vencimiento.  
Es una estrategia generalmente especulativa utilizada cuando se espera que el precio del activo subyacente caiga.

---

## **Ejemplo Práctico: Compra de Put sobre GameStop**

### **Datos Iniciales:**
1. **Subyacente:** GameStop  
2. **Precio actual:** 27 USD  
3. **Strike (Precio de Ejercicio):** 10 USD  
4. **Prima (costo de la opción):** 0.30 USD por acción  
5. **Multiplicador:** 100 (cada contrato equivale a 100 acciones)  
6. **Exposición Total:**  
   \[
   10 \, (\text{Strike}) \times 100 \, (\text{Acciones}) = 1,000 \, \text{USD}.
   \]
7. **Costo Total de la Prima:**  
   \[
   0.30 \times 100 = 30 \, \text{USD}.
   \]
8. **Vencimiento:** 16/12/2022.

---

### **Escenarios Posibles al Vencimiento**

1. **Si el precio de GameStop cae por debajo del Strike (10 USD):**  
   - **Ejemplo:** Precio final de la acción = 4.50 USD.  
   - **Resultado:**
     - Se ejerce el derecho de vender 100 acciones a 10 USD.  
     - Ganancia:  
       \[
       (10 - 4.50) \times 100 = 550 \, \text{USD}.
       \]
     - Menos la prima pagada:  
       \[
       550 - 30 = 520 \, \text{USD}.
       \]

2. **Si el precio de GameStop está por encima del Strike (10 USD):**  
   - **Ejemplo:** Precio final de la acción = 27 USD.  
   - **Resultado:**
     - La opción expira sin valor, ya que no tiene sentido vender a 10 USD cuando el mercado ofrece 27 USD.  
     - **Pérdida total:** 30 USD (prima pagada).

---

### **Cálculo del Valor Intrínseco y Temporal**
- **Strike:** 10 USD.  
- **Precio actual:** 27 USD.  
- **Valor Intrínseco:**  
  \[
  \text{Máximo}(10 - 27, 0) = 0 \, \text{(fuera del dinero)}.
  \]
- **Valor Temporal:**  
  La prima (0.30 USD) está compuesta **totalmente por valor temporal** debido a que la opción está "out of the money".  

---

## **Resultados Observados**

### **Evolución de la Prima**
- **Prima inicial:** 0.30 USD.  
- **Prima actual (con precio de la acción en 27 USD):** 0.13 USD.  
- **Pérdida en la Prima:**  
  \[
  \frac{0.30 - 0.13}{0.30} \times 100 = 56\%.
  \]
- **Conclusión:** La probabilidad de que GameStop caiga por debajo de 10 USD antes del vencimiento es muy baja, y la prima refleja esta realidad.

---

## **Ventajas de la Compra de Put**
1. **Riesgo Limitado:**  
   La pérdida máxima es la prima pagada.
2. **Ganancia Potencial Significativa:**  
   Si el precio del subyacente cae mucho, las ganancias pueden ser sustanciales.
3. **Estrategia Bajista:**  
   Permite beneficiarse de caídas en el precio del activo subyacente sin necesidad de vender en corto.

---

## **Desventajas de la Compra de Put**
1. **Especulación Elevada:**  
   En escenarios normales, las probabilidades de éxito son bajas.
2. **Dependencia del Valor Temporal:**  
   La pérdida del valor temporal afecta negativamente a la opción si el precio del subyacente no se mueve a favor rápidamente.
3. **Costos de Prima:**  
   Aunque el costo de la prima es bajo, puede ser una pérdida total si no se cumplen las expectativas.

---

## **Consideraciones Finales**
1. **Especulación Pura:**  
   La compra de Put, como en este ejemplo, puede ser una estrategia arriesgada y altamente especulativa, similar a la compra de Call.  
   No se recomienda como una estrategia principal.
2. **Uso como Cobertura:**  
   En lugar de especular, es más efectiva como una herramienta de cobertura para proteger una posición larga.
3. **Ganancias y Pérdidas:**  
   - **Ganancia máxima:** Limitada a la caída del precio del subyacente menos el costo de la prima.
   - **Pérdida máxima:** La prima pagada.


