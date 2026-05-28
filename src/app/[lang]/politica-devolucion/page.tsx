export default function PoliticaDevolucion() {
  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', padding: '4rem 2rem' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', background: 'white', padding: '4rem', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
        
        <h1 style={{ fontSize: '3rem', fontWeight: 900, color: '#0a215a', marginBottom: '2rem', textTransform: 'uppercase', borderBottom: '4px solid #E3350D', paddingBottom: '1rem' }}>
          Términos y Política de Devolución
        </h1>

        <div style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ padding: '1.5rem', backgroundColor: '#FEF2F2', borderLeft: '6px solid #E3350D', borderRadius: '0 8px 8px 0' }}>
            <p style={{ fontWeight: 800, color: '#991B1B', margin: 0 }}>
              AVISO IMPORTANTE: Al adquirir una entrada para cualquier evento gestionado por Universe TCG (incluyendo el Mollet TCG Fest), el comprador acepta incondicionalmente estos Términos y Condiciones, los cuales tienen carácter de contrato vinculante.
            </p>
          </div>

          <section>
            <h2 style={{ fontSize: '1.8rem', color: '#0a215a', marginBottom: '1rem' }}>1. Ausencia Legal del Derecho de Desistimiento</h2>
            <p>
              De conformidad con lo establecido en el <strong>Artículo 103, apartado l) del Real Decreto Legislativo 1/2007, de 16 de noviembre</strong>, por el que se aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios, <strong>el derecho de desistimiento no es aplicable</strong> a los contratos que se refieran al suministro de servicios de alojamiento para fines distintos del de servir de vivienda, transporte de bienes, alquiler de vehículos, comida o <strong>servicios relacionados con actividades de esparcimiento, si los contratos prevén una fecha o un periodo de ejecución específicos.</strong>
            </p>
            <p>
              Al tratarse el <em>Mollet TCG Fest</em> de un evento de ocio y esparcimiento con una fecha cerrada y un aforo rígidamente limitado (establecido por el recinto Merca Vell), la compra de la entrada es definitiva y en firme. <strong>BAJO NINGÚN CONCEPTO, MOTIVO MÉDICO, LABORAL O PERSONAL, SE PROCEDERÁ A LA DEVOLUCIÓN O REEMBOLSO DEL IMPORTE PAGADO.</strong>
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.8rem', color: '#0a215a', marginBottom: '1rem' }}>2. Casos de Fuerza Mayor del Asistente</h2>
            <p>
              La organización es consciente de que pueden surgir imprevistos (enfermedades, cancelaciones de vuelos, huelgas de transporte, etc.). Sin embargo, la infraestructura técnica (conexión a internet de alta capacidad, alquiler de mobiliario para 300 personas, equipos audiovisuales y personal) se sufraga y contrata asumiendo el aforo vendido. Por ello, la imposibilidad de asistir por causa mayor del participante <strong>no exime de la cláusula de no-devolución.</strong>
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.8rem', color: '#0a215a', marginBottom: '1rem' }}>3. Traspaso y Cambio de Titularidad</h2>
            <p>
              Como única alternativa a la no asistencia, Universe TCG permite la cesión de la entrada a una tercera persona, sujeto a un procedimiento estricto:
            </p>
            <ul style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>La solicitud de traspaso debe realizarse enviando un correo a <strong>soporte@universetcg.com</strong> desde la dirección de email del comprador original.</li>
              <li>Debe realizarse con un <strong>mínimo de 72 horas de antelación</strong> a la apertura de puertas del evento.</li>
              <li>Se deberán aportar los datos completos del nuevo titular (Nombre, Apellidos, DNI/Pasaporte, Fecha de Nacimiento y Player ID oficial).</li>
              <li>Universe TCG se reserva el derecho de aplicar una tasa de gestión administrativa de 5,00€ por el cambio de nombre en el sistema del torneo, a abonar por el nuevo titular.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.8rem', color: '#0a215a', marginBottom: '1rem' }}>4. Modificaciones del Evento y Cancelación por la Organización</h2>
            <p>
              En el improbable caso de que Universe TCG deba cancelar el evento de forma definitiva (no por aplazamiento), se reembolsará el importe facial de la entrada. <strong>No se reembolsarán en ningún caso</strong> los gastos de gestión cobrados por plataformas de venta de terceros, ni gastos de viaje, alojamiento o dietas en los que haya incurrido el comprador.
            </p>
            <p>
              Si el evento sufre alteraciones sustanciales (cambio de recinto dentro de la misma provincia o cambio de fechas), la entrada será válida para las nuevas condiciones. En caso de no poder asistir a las nuevas fechas, el comprador dispondrá de un plazo de 14 días desde el anuncio oficial para solicitar el reembolso. Pasado ese plazo, se aplicará la política de no-devolución estándar.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.8rem', color: '#0a215a', marginBottom: '1rem' }}>5. Derecho de Admisión</h2>
            <p>
              La compra de la entrada implica la aceptación de las normas del recinto (Merca Vell) y las normas de conducta de Play! Pokémon. La organización se reserva el derecho de admisión y expulsión, sin derecho a reembolso, a cualquier asistente que muestre conductas violentas, antideportivas, uso de sustancias ilícitas o incumplimiento de las indicaciones del staff y jueces.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
