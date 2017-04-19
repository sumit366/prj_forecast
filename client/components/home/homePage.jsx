'use strict';

import React from 'react';
import Select from 'react-select';
import Slider, {Range} from 'rc-slider';

class AssetPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {options: [
            { value: 'one', label: 'Level 1' },
            { value: 'two', label: 'Level 2' },
            { value: 'three', label: 'Level 3'}
        ],gran_val:'', slide_val:0, allow_cross: true, pushable: true};
    }

    granularityChange(val) {
        this.setState({gran_val: val})
    }

    onSliderChange(value) {
        this.setState({ slide_val: value});
    }

    render() {

        return (

            <div>
                <form>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-12">
                                <label className="radio-inline">
                                  <input type="radio" name="data_sub_type" />Fill Form
                                </label>
                                <label className="radio-inline">
                                  <input type="radio" name="data_sub_type"/>Upload File
                                </label>
                                <label className="radio-inline">
                                  <input type="radio" name="data_sub_type"/>Other
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-3">
                                <label htmlFor="input-password">Granularity Level:</label>
                                <Select
                                    placeholder = "Select.."
                                    name="form-field-name"
                                    value={this.state.gran_val}
                                    options={this.state.options}
                                    onChange={this.granularityChange.bind(this)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-3">
                                <label htmlFor="tsn">TSN:</label>
                                <input name="tsn" type="text" className="form-control" id="tsn" placeholder="TSN" required="required" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="quarter">Quarter:</label>
                                <input name="quarter" id="quarter" type="text" className="form-control" placeholder="Quarter" required="required" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="region">Region:</label>
                                <input name="region" id="region" type="text" className="form-control" placeholder="Region" required="required" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="contract_type">Contract Type:</label>
                                <input name="contract_type" id="contract_type" type="text" className="form-control" placeholder="Contract Type" required="required" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-3">
                                <label htmlFor="input-password">Year:</label>
                                <Select
                                    placeholder = "Select.."
                                    name="form-field-name"
                                    value={this.state.gran_val}
                                    options={this.state.options}
                                    onChange={this.granularityChange.bind(this)}
                                />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="input-password">Fiscal Week:</label>
                                <Select
                                    placeholder = "Select.."
                                    name="form-field-name"
                                    value={this.state.gran_val}
                                    options={this.state.options}
                                    onChange={this.granularityChange.bind(this)}
                                />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="platform">Platform:</label>
                                <input name="platform" id="platform" type="text" className="form-control" placeholder="Platform" required="required" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="frame_group">Frame Group:</label>
                                <input name="frame_group" id="frame_group" type="text" className="form-control" placeholder="Frame Group" required="required" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-3">
                                <label htmlFor="input-password">Forecasting window:</label>
                                <Slider tipFormatter="" value={this.state.slide_val} onChange={this.onSliderChange.bind(this)} />
                                <Range tipFormatter="" value={[0, this.state.slide_val]} pushable={true} allowCross={true} count= {1} />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="input-password">Historical data range:</label>
                                <Slider tipFormatter="" value={this.state.slide_val} onChange={this.onSliderChange.bind(this)} />
                                <Range tipFormatter="" value={[0, this.state.slide_val]} pushable={true} allowCross={true} count= {1} />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="input-password">Year:</label>
                                <Slider tipFormatter="" value={this.state.slide_val} onChange={this.onSliderChange.bind(this)} />
                                <Range tipFormatter="" value={[0, this.state.slide_val]} pushable={true} allowCross={true} count= {1} />
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AssetPage;