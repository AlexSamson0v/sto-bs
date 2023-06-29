import Table from 'react-bootstrap/Table';

function ResponsiveBreakpointsExample() {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Автомобили</th>
            <th>Классы</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Hyundai Solaris, VW Golf, Ford Fiesta, Ford Focus и другие авто аналогичные по классу</td>
            <td>первый класс</td>


          </tr>
          <tr>
            <td>2</td>
            <td>Audi A6, Ford Mondeo, Ford С-max, Hyundai Sonata, Mazda 6, Toyota Camry, VW Passat и другие автомобили аналогичные по классу</td>
            <td>второй класс</td>

          </tr>
          <tr>
            <td>3</td>
            <td>BMW-7, Audi A8, MB S-класс, премиум, кроссоверы, внедорожники, автобусы и другие аналогичные по классу</td>
            <td>третий класс</td>

          </tr>
        </tbody>
      </Table>
      
    </div>
  );
}

export default ResponsiveBreakpointsExample;