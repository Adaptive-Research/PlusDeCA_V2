import React, { useState } from "react";
import IntlTelInput from "react-intl-tel-input";
import { Link } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import * as sweetalerts from "../../../data/Component/sweetalerts/sweetalerts";
import * as fromadvanced from "../../../data/Form/formadvanced/formadvanced";
import * as fromadvancede from "../../../data/Form/formelement/formelement";
import { Breadcrumb, Card, Row, Col, Form, Button } from "react-bootstrap";
export default function FormAdvanced() {
  const [dates, setDates] = useState();
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Form Advanced</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Forms
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Form Advanced
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link to="#" className="btn btn-primary btn-icon text-white me-3">
            <span>
              <i className="fe fe-plus"></i>&nbsp;
            </span>
            Add Account
          </Link>
          <Link to="#" className="btn btn-success btn-icon text-white">
            <span>
              <i className="fe fe-log-in"></i>&nbsp;
            </span>
            Export
          </Link>
        </div>
      </div>

      <Row>
        <Col lg={12} md={12}>
          <Form method="post" className="card">
            <Card.Header>
              <h3 className="card-title">File Upload</h3>
            </Card.Header>
            <Card.Body>
              <Row className=" mb-5">
                <Col className=" mb-4 mb-lg-0 drop" lg={4} sm={12}>
                  <fromadvanced.Dropimg type="file" className="dropify" />
                </Col>
                <Col className=" mb-4 mb-lg-0 drop " lg={4} sm={12}>
                  <fromadvanced.Dropimg1 type="file" className="dropify" />
                </Col>
                <Col className=" drop" lg={3} sm={12}>
                  <fromadvanced.Dropimg2
                    type="file"
                    className="dropify"
                    disabled="disabled"
                  />
                </Col>
              </Row>
              <div className="input-group mb-5 file-browser">
                <input
                  type="text"
                  className="form-control browse-file"
                  placeholder="Choose"
                  readOnly
                  onClick={() => sweetalerts.Infoalertbutton()}
                />
                <Form.Label className="input-group-text btn btn-primary mt-0">
                  Browse
                  <input
                    type="file"
                    className="file-browserinput"
                    style={{ display: "none" }}
                    multiple
                  />
                </Form.Label>
              </div>
              <div className="form-group mb-0 drop4">
                <fromadvanced.OuterDropzone
                  id="demo"
                  type="file"
                  name="files"
                  accept=".jpg, .png, image/jpeg, image/png"
                  multiple
                />
              </div>
            </Card.Body>
          </Form>

          <Form method="post" className="card">
            <Card.Header>
              <h3 className="card-title">Select2 elements</h3>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Beast</Form.Label>
                <fromadvancede.AnimatedMulti />
              </Form.Group>
              <Form.Group>
                <Form.Label>Basic Select2</Form.Label>
                <fromadvancede.AnimatedMulti1 />
              </Form.Group>
              <Form.Group>
                <Form.Label> Select2 with search box</Form.Label>
                <fromadvancede.SearchSelect1 />
              </Form.Group>
              <Form.Group>
                <Form.Label>Users list</Form.Label>
                <fromadvancede.AnimatedMulti2 />
              </Form.Group>
            </Card.Body>
          </Form>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Time Picker</h3>
            </Card.Header>
            <Card.Body className=" Timepicker">
              <Form.Label>Default Time Picker:</Form.Label>
              <div className="wd-150 mg-b-30">
                <div className="input-group">
                  <fromadvanced.BasicTimePicker
                    className="form-control"
                    id="tp1"
                    placeholder="Set time"
                    type="text"
                  />
                </div>
              </div>

              <Form.Label className="mt-4">
                Set the scroll position to local time if no value selected:
              </Form.Label>
              <div className="wd-150 mg-b-30">
                <div className="input-group">
                  <fromadvanced.ResponsiveTimePickers />
                </div>
              </div>

              <Form.Label className="mt-4 ">
                Dynamically set the time using a Javascript Date object:
              </Form.Label>
              <div className="d-flex">
                <div className="input-group wd-150">
                  <fromadvanced.LocalizedTimePicker
                    className="form-control"
                    id="tp3"
                    placeholder="Set time"
                    type="text"
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Color Picker</h3>
            </Card.Header>
            <Card.Body className="color-picker">
              <p className=" mb-1">
                Same way you select color in Adobe Photoshop.
              </p>
              <fromadvanced.ColorPicker />
              <p className="mt-3  mb-1">
                You can allow alpha transparency selection.
              </p>
              <fromadvanced.Transparencyselection />
              <p className="mt-4 mb-1">
                Show pallete only. If you'd like, spectrum can show the palettes
                you specify, and nothing else.
              </p>
              <fromadvanced.ColorPickers id="showPaletteOnly" type="text" />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Date, Month, Year Range Picker</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa fa-clock-o tx-16 lh-0 op-6"></i>
                    </span>
                    <DatePicker
                      className="form-control"
                      placeholder="Date Range"
                      value={dates}
                      onChange={setDates}
                      multiple
                      numberOfMonths={1}
                    />
                  </div>
                </Col>
                <Col className="mt-4 mt-md-0" md={4}>
                  <div className="input-group">
                    <div className="input-group-text">
                      <span className="fa fa-clock-o tx-16 lh-0 op-6"></span>
                    </div>
                    <DatePicker
                      className="form-control"
                      placeholder="Month Range"
                      onlyMonthPicker
                      multiple
                      sort
                      plugins={[]}
                    />
                  </div>
                </Col>
                <Col className="mt-4 mt-md-0" md={4}>
                  <div className="input-group">
                    <div className="input-group-text">
                      <span className="fa fa-clock-o tx-16 lh-0 op-6"></span>
                    </div>
                    <DatePicker
                      className="form-control"
                      placeholder="Year Range"
                      onlyYearPicker
                      multiple
                      sort
                    />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Default Date picker</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="mg-b-20 mg-sm-b-40">
                The datepicker is tied to a standard form input field. Click on
                the input to open an interactive calendar in a small overlay. If
                a date is chosen, feedback is shown as the input's value.
              </p>
              <div className="wd-200 mg-b-30">
                <div className="input-group">
                  <div className="input-group-text">
                    <span className="fa fa-calendar tx-16 lh-0 op-6"></span>
                  </div>
                  <DatePicker
                    className="form-control fc-datepicker"
                    placeholder="MM/DD/YYYY"
                    value={dates}
                    onChange={setDates}
                    multiple
                    numberOfMonths={1}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Multiple Months </Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="mg-b-20 mg-sm-b-40">
                The datepicker is tied to a standard form input field. Click on
                the input to open an interactive calendar in a small overlay. If
                a date is chosen, feedback is shown as the input's value.
              </p>
              <div className="wd-200 mg-b-30">
                <div className="input-group">
                  <div className="input-group-text">
                    <span className="fa fa-calendar tx-16 lh-0 op-6"></span>
                  </div>
                  <DatePicker
                    className="form-control"
                    placeholder="MM/DD/YYYY"
                    onlyMonthPicker
                    multiple
                    sort
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Multiple Select Styles</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6}>
                  <Form.Group>
                    <Form.Label>Basic MutipleSelect</Form.Label>
                    <fromadvanced.BasicMutipleSelect />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Disabled MutipleSelect</Form.Label>
                    <fromadvanced.DisabledMutipleSelect
                      multiple="multiple"
                      disabled
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Single Group MutipleSelect</Form.Label>
                    <fromadvanced.Singleselectdis />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Multiple Items With Group-Option</Form.Label>
                    <fromadvanced.MultipleItemsWithGroupOption />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Single Row</Form.Label>
                    <fromadvanced.Singleselect1 />
                  </Form.Group>
                  <Form.Group className="form-group mb-0">
                    <Form.Label>Group-Option Filter </Form.Label>
                    <fromadvanced.DisablePreselected />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group>
                    <Form.Label>MutipleSelect</Form.Label>
                    <fromadvancede.GroupOptionMutipleSelect1 />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>MutipleSelect-1:</Form.Label>
                    <fromadvanced.GroupOptionMutipleSelect />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Multiple Items</Form.Label>
                    <fromadvanced.MultipleItems />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Custom Styles</Form.Label>
                    <fromadvancede.CustomSelectIcon />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Select Filter </Form.Label>

                    <fromadvanced.Selectfilter />
                  </Form.Group>
                  <Form.Group className="mb-0">
                    <Form.Label>Custom StyleHover</Form.Label>

                    <fromadvanced.CustomStyle />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Select All Styles</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6} md={12}>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Single Select:
                    </Form.Label>
                    <Col md={12}>
                      <fromadvancede.Singleselect12 />
                    </Col>
                  </Form.Group>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Disabled Select:
                    </Form.Label>
                    <Col md={12}>
                      <fromadvanced.Disabledselect1 />
                    </Col>
                  </Form.Group>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Inline Select:
                    </Form.Label>
                    <Col md={12}>
                      <fromadvancede.Singleselect12 />
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg={6} md={12}>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Multiple Select:
                    </Form.Label>
                    <Col md={12}>
                      <fromadvanced.MultipleSelect3 />
                    </Col>
                  </Form.Group>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Disabled Select:
                    </Form.Label>
                    <Col md={12}>
                      <fromadvanced.Disabledselect />
                    </Col>
                  </Form.Group>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Optgroup Support:
                    </Form.Label>
                    <Col md={12}>
                      <fromadvanced.OptgroupSupport />
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg={6} md={12}>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Multiple Select-1:
                    </Form.Label>
                    <Col md={12}>
                      <fromadvanced.MultipleSelect1 />
                    </Col>
                  </Form.Group>
                  <div className="form-group row ">
                    <Form.Label className="col-md-12 form-label">
                      Multiple Select-2:
                    </Form.Label>
                    <Col md={12}>
                      <fromadvanced.MultipleSelect22 />
                    </Col>
                  </div>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Search Select-1:
                    </Form.Label>
                    <Col md={12}>
                      <fromadvancede.SearchSelect1 />
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg={6} md={12}>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Search Select-2:
                    </Form.Label>
                    <Col md={12}>
                      <fromadvanced.SearchSelect22 />
                    </Col>
                  </Form.Group>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Search Select-3:
                    </Form.Label>
                    <Col md={12}>
                      <fromadvanced.SearchSelect13 />
                    </Col>
                  </Form.Group>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Search Select-4:
                    </Form.Label>
                    <Col md={12}>
                      <fromadvanced.SearchSelect45 />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Dual List Box</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={12}>
                  <Card className=" shadow-none border">
                    <Card.Body>
                      <div className="transfer"></div>
                      <Row>
                        <Col className="TransferList1" md={12}>
                          <fromadvanced.TransferList1 />
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Select Box</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6} md={12}>
                  <Form.Group className="from-group mb-5 mb-lg-0">
                    <fromadvanced.Selectbox1 />
                  </Form.Group>
                </Col>
                <Col lg={6} md={12}>
                  <Form.Group className="from-group">
                    <fromadvanced.Selectbox />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Country selctor</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <IntlTelInput
                  containerClassName="intl-tel-input me-1 mb-5 mb-sm-0"
                  inputClassName="form-control"
                />
                <Button className="btn btn-primary ">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
