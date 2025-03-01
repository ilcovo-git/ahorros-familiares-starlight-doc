---
title: Venta de Put
description: Venta de Put.
---

La venta de una opción Put obliga al vendedor a **comprar** el activo subyacente a un precio pactado (Strike) si el comprador de la Put ejerce su derecho antes o en la fecha de vencimiento.  
Es una estrategia generalmente utilizada en escenarios donde el vendedor:
- Considera que el precio del activo no caerá por debajo del Strike.
- Está dispuesto a comprar el activo a un precio menor al actual.

---

## **Ejemplo Práctico: Venta de Put sobre Alphabet (GOOG)**

### **Datos Iniciales:**
1. **Subyacente:** Alphabet (GOOG).  
2. **Precio actual:** 98 USD.  
3. **Strike (Precio de Ejercicio):** 90 USD.  
4. **Prima (precio recibido):** 6.25 USD por acción.  
5. **Multiplicador:** 100 (cada contrato equivale a 100 acciones).  
6. **Ingreso Total por Prima:**  
   \[
   6.25 \times 100 = 625 \, \text{USD}.
   \]
7. **Exposición Total:**  
   \[
   90 \, (\text{Strike}) \times 100 \, (\text{Acciones}) = 9,000 \, \text{USD}.
   \]
8. **Vencimiento:** 21/04/2023.

---

### **Escenarios Posibles al Vencimiento**

#### **1. Si el precio de Alphabet está por encima del Strike (90 USD):**
- El comprador de la Put no ejercerá su derecho, ya que no tendría sentido vender las acciones a 90 USD cuando el mercado las compra a un precio superior.
- **Resultado para el vendedor de la Put:**
  - El vendedor retiene los 625 USD de la prima como ganancia total.
  - No se adquieren las acciones de Alphabet.

#### **2. Si el precio de Alphabet está por debajo del Strike (90 USD):**
- El comprador de la Put ejercerá su derecho, obligando al vendedor a comprar 100 acciones a 90 USD.
- **Resultado para el vendedor de la Put:**  
  - Precio efectivo de compra:  
    \[
    90 - 6.25 = 83.75 \, \text{USD por acción}.
    \]
  - Si Alphabet cotiza, por ejemplo, a 81 USD:  
    - **Pérdida por acción:**  
      \[
      83.75 - 81 = 2.75 \, \text{USD}.
      \]
    - **Pérdida total:**  
      \[
      2.75 \times 100 = 275 \, \text{USD}.
      \]
    - A pesar de la pérdida, el vendedor ha adquirido las acciones a un precio que considera atractivo.

---

### **Evolución de la Prima**
- **Prima inicial recibida:** 6.25 USD.  
- **Prima actual (con Alphabet en 98 USD):** 4.90 USD.  
- **Beneficio actual:**  
  \[
  6.25 - 4.90 = 1.35 \, \text{USD}.
  \]
- **Porcentaje de prima consumida:**  
  \[
  \frac{1.35}{6.25} \times 100 = 21.6 \%.
  \]
- En este caso, dado que solo se ha consumido el 21.6% de la prima, no sería ideal cerrar la posición.  
  Conforme el tiempo avance y el valor temporal desaparezca, el porcentaje de prima consumida aumentará.

---

## **Ventajas de la Venta de Put**
1. **Ingreso de Prima:**  
   Permite al vendedor generar ingresos recurrentes, incluso si no se ejecuta la opción.
2. **Compra de Activos a Precios Inferiores:**  
   Si se ejecuta la opción, el vendedor adquiere el activo a un precio reducido (Strike - Prima recibida).
3. **Estrategia con Margen de Seguridad:**  
   Puede utilizarse para establecer precios de compra más bajos en activos que se consideren infravalorados.

---

## **Desventajas de la Venta de Put**
1. **Riesgo Ilimitado:**  
   Si el precio del subyacente cae drásticamente, las pérdidas pueden ser significativas.
2. **Obligación de Compra:**  
   El vendedor está obligado a comprar el subyacente si el comprador ejerce su derecho.
3. **Requiere Garantías:**  
   El broker retendrá un margen para cubrir posibles pérdidas, limitando la liquidez disponible.

---

## **Consideraciones Finales**
1. **Estrategia Win-Win:**  
   - Si el subyacente no cae por debajo del Strike, el vendedor se queda con la prima.  
   - Si cae, el vendedor adquiere un activo que ya había evaluado como interesante.
2. **Aplicación Ideal:**  
   La venta de Put es más adecuada en momentos de alta volatilidad, ya que las primas son mayores.  
   También es útil para comprar activos a precios inferiores al actual.
3. **Gestión del Riesgo:**  
   Asegúrate de tener el efectivo necesario para comprar las acciones si la opción es ejercida.  
   Además, revisa regularmente el mercado para decidir si cerrar la posición anticipadamente.

---

## **Resumen de Roles: Vendedor vs. Comprador de Put**
| **Aspecto**                 | **Comprador de Put**       | **Vendedor de Put**              |
| --------------------------- | -------------------------- | -------------------------------- |
| **Prima**                   | Paga                       | Recibe                           |
| **Ganancia Máxima**         | Ilimitada                  | Limitada a la prima              |
| **Pérdida Máxima**          | Limitada a la prima pagada | Ilimitada (si el precio cae a 0) |
| **Expectativas de Mercado** | Muy bajistas               | Levemente alcistas               |


