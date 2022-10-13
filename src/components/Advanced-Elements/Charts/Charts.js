import React from "react";
import { Breadcrumb, Col, Row, Card } from "react-bootstrap";
import ReactEcharts from "echarts-for-react";
import { Link } from "react-router-dom";
import * as charts from "../../../data/Advancedelements/charts/charts";
export default function Charts() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Chart</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Advanced Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Chart
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
        <Col lg={12}>
          <Card>
            <Card.Header className="card-header">
              <Card.Title>
                <h3 className="card-title">c3 charts</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div>
                <div className="example example-bg">
                  <div className="example-column example-column-2">
                    <Card>
                      <Card.Header className="card-header">
                        <Card.Title>
                          <h3>Chart name</h3>
                        </Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <div id="chart-combination" className="chartsh">
                           <ReactEcharts
                id="echart1"
                className="chartsh"
                option={charts.echart1.option}
                series={charts.echart1.series}
              />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="highlight mb-0">
                  <pre>
                    <code className="language-html" data-bs-lang="html">
                      <span className="nt">&lt;div</span>
                      <span className="na">className=</span>
                      <span className="s">"card"</span>
                      <span className="nt">&gt;</span>
                      <span className="nt">&lt;div</span>
                      <span className="na">className=</span>
                      <span className="s">"card-header"</span>
                      <span className="nt">&gt;</span>
                      <span className="nt">&lt;h3</span>
                      <span className="na">className=</span>
                      <span className="s">"card-title"</span>
                      <span className="nt">&gt;</span>Chart name
                      <span className="nt">&lt;/h3&gt;</span>
                      <span className="nt">&lt;/div&gt;</span>
                      <span className="nt">&lt;div</span>
                      <span className="na">className=</span>
                      <span className="s">"card-body"</span>
                      <span className="nt">&gt;</span>
                      <span className="nt">&lt;div</span>
                      <span className="na">id=</span>
                      <span className="s">"chart-combination"</span>
                      <span className="na">className=</span>
                      <span className="s">"chartsh"</span>
                      <span className="nt">&gt;&lt;/div&gt;</span>
                      <span className="nt">&lt;/div&gt;</span>
                      <span className="nt">&lt;/div&gt;</span>
                      <span className="nt">&lt;script&gt;</span>
                      <span className="nx">require</span>
                      <span className="p">([</span>
                      <span className="s1">'c3'</span>
                      <span className="p">,</span>
                      <span className="s1">'jquery'</span>
                      <span className="p">],</span>
                      <span className="kd">function</span>
                      <span className="p">(</span>
                      <span className="nx">c3</span>
                      <span className="p">,</span> <span className="nx">$</span>
                      <span className="p">)</span> <span className="p"></span>
                      <span className="nx">$</span>
                      <span className="p">(</span>
                      <span className="nb">document</span>
                      <span className="p">).</span>
                      <span className="nx">ready</span>
                      <span className="p">(</span>
                      <span className="kd">function</span>
                      <span className="p">()</span>
                      <span className="kd">var</span>
                      <span className="nx">chart</span>
                      <span className="o">=</span>
                      <span className="nx">c3</span>
                      <span className="p">.</span>
                      <span className="nx">generate</span>
                      <span className="p">(</span>
                      <span className="na">bindto</span>
                      <span className="p">:</span>
                      <span className="s1">'#chart-combination'</span>
                      <span className="p">,</span>
                      <span className="c1"> id of chart wrapper</span>
                      <span className="na">data</span>
                      <span className="p">:</span> <span className="p"></span>
                      <span className="na">columns</span>
                      <span className="p">:</span> <span className="p">[</span>
                      <span className="c1"> each columns data</span>
                      <span className="p">[</span>
                      <span className="s1">'data1'</span>
                      <span className="p">,</span>
                      <span className="mf">100</span>
                      <span className="p">,</span>
                      <span className="mf">130</span>
                      <span className="p">,</span>
                      <span className="mf">150</span>
                      <span className="p">,</span>
                      <span className="mf">240</span>
                      <span className="p">,</span>
                      <span className="mf">130</span>
                      <span className="p">,</span>
                      <span className="mf">220</span>
                      <span className="p">],</span>
                      <span className="p">[</span>
                      <span className="s1">'data2'</span>
                      <span className="p">,</span>
                      <span className="mf">250</span>
                      <span className="p">,</span>
                      <span className="mf">200</span>
                      <span className="p">,</span>
                      <span className="mf">220</span>
                      <span className="p">,</span>
                      <span className="mf">400</span>
                      <span className="p">,</span>
                      <span className="mf">250</span>
                      <span className="p">,</span>
                      <span className="mf">350</span>
                      <span className="p">]'</span>
                      <span className="p">[</span>
                      <span className="s1">'data3'</span>
                      <span className="p">,</span>
                      <span className="mf">100</span>
                      <span className="p">,</span>
                      <span className="mf">130</span>
                      <span className="p">,</span>
                      <span className="mf">150</span>
                      <span className="p">,</span>
                      <span className="mf">240</span>
                      <span className="p">,</span>
                      <span className="mf">130</span>
                      <span className="p">,</span>
                      <span className="mf">220</span>
                      <span className="p">]</span>
                      <span className="p">],</span>
                      <span className="na">type</span>
                      <span className="p">:</span>
                      <span className="s1">'bar'</span>
                      <span className="p">,</span>
                      <span className="c1">default type of chart</span>
                      <span className="na">colors</span>
                      <span className="p">:</span> <span className="p"></span>
                      <span className="s1">'data1'</span>
                      <span className="p">:</span>
                      <span className="nx">Zanex</span>
                      <span className="p">.</span>
                      <span className="nx">colors</span>
                      <span className="p">[</span>
                      <span className="s2">"orange"</span>
                      <span className="p">],</span>
                      <span className="s1">'data2'</span>
                      <span className="p">:</span>
                      <span className="nx">Zanex</span>
                      <span className="p">.</span>
                      <span className="nx">colors</span>
                      <span className="p">[</span>
                      <span className="s2">"pink"</span>
                      <span className="p">]</span>
                      <span className="s1">'data3'</span>
                      <span className="p">:</span>
                      <span className="nx">Zanex</span>
                      <span className="p">.</span>
                      <span className="nx">colors</span>
                      <span className="p">[</span>
                      <span className="s2">"teal"</span>
                      <span className="p">]</span>
                      <span className="p">,</span>
                      <span className="na">names</span>
                      <span className="p">:</span> <span className="p"></span>
                      <span className="c1"> name of each serie</span>
                      <span className="s1">'data1'</span>
                      <span className="p">:</span>
                      <span className="s1">'Marketing'</span>
                      <span className="p">,</span>
                      <span className="s1">'data2'</span>
                      <span className="p">:</span>
                      <span className="s1">'Development'</span>
                      <span className="s1">'data3'</span>
                      <span className="p">:</span>
                      <span className="s1">'Sales'</span>
                      <span className="p"></span>
                      <span className="p">,</span>
                      <span className="na">axis</span>
                      <span className="p">:</span> <span className="p"></span>
                      <span className="na">x</span>
                      <span className="p">:</span> <span className="p"></span>
                      <span className="na">type</span>
                      <span className="p">:</span>
                      <span className="s1">'category'</span>
                      <span className="p">,</span>
                      <span className="c1"> name of each category</span>
                      <span className="na">categories</span>
                      <span className="p">:</span> <span className="p">[</span>
                      <span className="s1">'2007-2008'</span>
                      <span className="p">,</span>
                      <span className="s1">'2009-2010'</span>
                      <span className="p">,</span>
                      <span className="s1">'2011-2012'</span>
                      <span className="p">,</span>
                      <span className="s1">'2013-2014'</span>
                      <span className="p">,</span>
                      <span className="s1">'2015-2016'</span>
                      <span className="p">,</span>
                      <span className="s1">'2017-2018'</span>
                      <span className="p">]</span>
                      <span className="p">,</span>
                      <span className="p">,</span>
                      <span className="na">bar</span>
                      <span className="p">:</span> <span className="p"></span>
                      <span className="na">width</span>
                      <span className="p">:</span>
                      <span className="kc">50</span>
                      <span className="p">,</span>
                      <span className="na">legend</span>
                      <span className="p">:</span> <span className="p"></span>
                      <span className="na">show</span>
                      <span className="p">:</span>
                      <span className="kc">false</span>
                      <span className="p">,</span>
                      <span className="c1">hide legend</span>
                      <span className="p">,</span>
                      <span className="na">padding</span>
                      <span className="p">:</span> <span className="p"></span>
                      <span className="na">bottom</span>
                      <span className="p">:</span> <span className="mi">0</span>
                      <span className="p">,</span>
                      <span className="na">top</span>
                      <span className="p">:</span> <span className="mi">0</span>
                      <span className="p">,</span>
                      <span className="p">);</span>
                      <span className="p">);</span>
                      <span className="p">);</span>
                      <span className="nt">&lt;/script&gt;</span>
                    </code>
                  </pre>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}