// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: 'A.F. Docs',
      customCss: [
          // Ruta a tus estilos base de Tailwind:
          './src/tailwind.css',
      ],
      social: {
          discord: 'https://astro.build/chat',
          github: 'https://github.com/withastro/starlight',
          linkedin: 'https://www.linkedin.com/company/astroinc',
          twitter: 'https://twitter.com/astrodotbuild',
          'x.com': 'https://x.com/astrodotbuild',
          youtube: 'https://youtube.com/@astrodotbuild',
          reddit: 'https://reddit.com/r/astrodotbuild',
      },
      sidebar: [
          { label: 'Home', link: '/' },
          {
              label: '🚀App Ahorros Familiares',
              items: [
                  { label: 'Bienvenida', slug: 'guides/bienvenida' },
                  { label: '¿Por qué Ahorros Familiares?', slug: 'guides/porque-ahorros-familiares' },
                  // Each item here is one entry in the navigation menu.
                  { label: 'Paso a paso Análisis y Valoración de Empresas', slug: 'guides/paso-a-paso-analisis-y-valoración-de-empresas' },
                  { label: '⭐Valoración Automatizada', slug: 'guides/valoracion-automatizada' },
                  { label: 'Ayuda de Experto', slug: 'guides/ayuda-de-experto' },
                  { label: 'Tutorial: Tesis de una Acción | Ahorros Familiares', slug: 'guides/ejemplo-de-tesis-de-una-accion-en-ahorros-familiares' },
              ],
          },
          {
              label: 'Introducción',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: '¿Qué es la Bolsa?', slug: 'guides/que-es-la-bolsa' },
                  { label: 'El interés compuesto', slug: 'guides/el-interes-compuesto' },
                  { label: 'Análisis técnico', slug: 'guides/analisis-tecnico' },
                  { label: 'Análisis fundamental', slug: 'guides/analisis-fundamental' },
                  { label: '⭐Value Investing', slug: 'guides/value-investing' },
                  { label: 'Growth Investing', slug: 'guides/growth-investing' },
                  { label: 'El Mercado', slug: 'guides/el-mercado' },
              ],
          },
          {
              label: 'Conceptos Claros',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: '🚀Inversión a Largo Plazo', slug: 'guides/inversion-a-largo-plazo' },
                  { label: 'Ineficiencia del Mercado', slug: 'guides/ineficiencia-del-mercado' },
              ],
          },
          {
              label: 'Aprende Las Bases',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: 'Market Cap', slug: 'guides/market-cap' },
                  { label: 'Enterprise Value', slug: 'guides/enterprise-value' },
                  { label: 'Precio de la Acción', slug: 'guides/precio-de-la-accion' },
                  { label: 'Volumen de Acciones', slug: 'guides/volumen-de-acciones' },
                  { label: 'Acciones en Circulación', slug: 'guides/acciones-en-circulacion' },
                  { label: 'Split Acciones', slug: 'guides/split-acciones' },
                  { label: '⭐Volatilidad de una acción', slug: 'guides/volatilidad-de-una-accion' },
              ],
          },
          {
              label: 'Conceptos Avanzados',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: 'Mercado Cotizado', slug: 'guides/mercado-cotizado' },
                  { label: 'IPO', slug: 'guides/oferta-publica-inicial' },
                  { label: 'OPA', slug: 'guides/oferta-publica-adquisicion' },
                  { label: 'Spin Off', slug: 'guides/spin-off' },
                  { label: 'Accionariado', slug: 'guides/accionariado' },
                  { label: 'Salida a Bolsa', slug: 'guides/salida-a-bolsa' },
              ],
          },
          {
              label: 'Experto: Contabilidad',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: 'Los Estados Financieros', slug: 'guides/estados-financieros' },
                  { label: 'Análisis: Cuenta Pérdidas y Ganancias', slug: 'guides/analisis-cuenta-perdidas-y-ganancias' },
                  { label: 'Análisis: Balance', slug: 'guides/analisis-balance' },
                  { label: 'Análisis: Flujo de Caja', slug: 'guides/analisis-flujo-de-caja' },
                  { label: 'Ventas Orgánicas e Inorgánicas', slug: 'guides/ventas-organicas-e-inorganicas' },
                  { label: 'Principales Beneficios de las Empresas', slug: 'guides/principales-beneficios-de-las-empresas' },
                  { label: 'Márgenes de Beneficio', slug: 'guides/margenes-de-beneficio' },
                  { label: 'Métricas de Rentabilidad', slug: 'guides/metricas-de-rentabilidad' },
                  { label: 'Análisis de caja y deuda', slug: 'guides/analisis-de-caja-y-deuda' },
                  { label: 'Working Capital', slug: 'guides/working-capital' },
                  { label: 'CAPEX Mantenimiento', slug: 'guides/capex-de-mantenimiento' },
                  { label: 'CAPEX Crecimiento', slug: 'guides/capex-de-crecimiento' },
                  { label: '⭐Free Cash Flow', slug: 'guides/free-cash-flow' },
              ],
          },
          {
              label: 'Experto: Valoraciones',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: '⭐Valor Intrínseco', slug: 'guides/valor-intrinseco' },
                  { label: 'Margen de Seguridad', slug: 'guides/margen-de-seguridad' },
                  { label: 'Principales Ratios de Valoración', slug: 'guides/principales-ratios-de-valoracion' },
                  { label: 'Múltiplos de Valoración', slug: 'guides/multiplos-de-valoracion' },
                  { label: 'El PER', slug: 'guides/el-per' },
                  { label: 'El EV/FCF', slug: 'guides/el-enterprise-values-free-cash-flow' },
                  { label: 'Ventajas Competitivas', slug: 'guides/ventajas-competitivas' },
                  { label: 'Gestión del Capital', slug: 'guides/gestion-del-capital' },
                  { label: '⭐Análisis Equipos Directivos', slug: 'guides/analisis-equipos-directivos' },
              ],
          },
          {
              label: 'Gestión de Carteras',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: '⭐Construye tú Cartera de Inversión', slug: 'guides/construye-tu-cartera-de-inversion' },
                  { label: 'Mantenimiento de la Cartera', slug: 'guides/mantenimiento-de-la-cartera' },
                  { label: 'Venta de posiciones de la Cartera', slug: 'guides/venta-de-posiciones-de-la-cartera' },
                  { label: '⭐Psicología de la Inversión', slug: 'guides/psicologia-de-la-inversion' },
                  { label: 'Invertir Durante una Crisis en Bolsa', slug: 'guides/invertir-durante-una-crisis-en-bolsa' },
              ],
          },
          {
              label: 'Empresas',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: 'Acciones de Consumo', slug: 'guides/invertir-en-empresas-de-consumo' },
                  { label: 'Acciones Minoristas', slug: 'guides/invertir-en-empresas-minoristas' },
                  { label: 'Acciones Industriales', slug: 'guides/invertir-en-empresas-industriales' },
                  { label: 'Acciones Tecnologícas', slug: 'guides/invertir-en-empresas-tecnologicas' },
                  { label: 'Acciones Financieras', slug: 'guides/invertir-en-empresas-financieras' },
                  { label: 'Acciones Real Estates', slug: 'guides/invertir-en-empresas-real-estate-investment-trust' },
                  { label: 'Acciones Lujos', slug: 'guides/invertir-en-empresas-de-lujos' },
                  { label: 'Holdings Cotizados', slug: 'guides/holdings-cotizados' },
              ],
          },
          {
              label: 'Otras Inversiones',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: 'Small Caps', slug: 'guides/small-caps' },
                  { label: 'Situaciones Especiales', slug: 'guides/situaciones-especiales' },
                  { label: 'Renta Fija', slug: 'guides/renta-fija' },
              ],
          },
          {
              label: 'Reference',
              autogenerate: { directory: 'reference' },
          },
      ],
  }),
  tailwind({
      // Desactiva los estilos base predeterminados:
      applyBaseStyles: false,
  }),
  ],

  output: 'server',
  adapter: netlify(),
});