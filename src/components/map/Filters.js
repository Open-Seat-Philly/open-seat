import React from 'react';

const Filters = () => (
  <div className="panel-group nav-container accordion-inner" id="accordion">
    <div className="panel panel-default">
      <div className="panel-heading">
      <p className="accordion-heading">Find a seat</p>
        <h4 className="panel-title border nav-text line-height">
            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Elected seats<b className="glyphicon clickable"></b></a>
        </h4>
      </div>
      <div id="collapseOne" className="panel-collapse collapse in">
        <div className="panel-body panel-padding">
          <table className="table drop-size borderless table-margin">
            <tbody>
              <tr>
                <td>
                  <div className="checkbox checkbox-margin">
                    <label><input type="checkbox" />Judge of Elections</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="checkbox checkbox-margin">
                    <label><input type="checkbox" />Majority Inspector</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="checkbox checkbox-margin">
                    <label><input type="checkbox" />Minority Inspector</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="panel-heading">
        <h4 className="panel-title background border nav-text line-height">
            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Appointed seats<b className="glyphicon clickable"></b></a>
        </h4>
      </div>
      <div id="collapseTwo" className="panel-collapse collapse in">
        <div className="panel-body panel-padding">
          <table className="table drop-size borderless table-margin">
            <tbody>
              <tr>
                <td>
                  <div className="checkbox checkbox-margin">
                    <label><input type="checkbox" />Clerk</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="checkbox checkbox-margin">
                    <label><input type="checkbox" />Machine Inspector</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="checkbox checkbox-margin">
                    <label><input type="checkbox" />Bilingual Interpreter</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="panel-heading">
        <p className="accordion-heading">Find your district</p>
        <input className="center-input" placeholder="address" />
        <div className=""><button type="button" className="btn button">search</button></div>
      </div>
    </div>
  </div>
);

export default Filters;
