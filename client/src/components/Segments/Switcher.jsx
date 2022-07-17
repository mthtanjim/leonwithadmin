import React from 'react';
import { NavLink } from 'react-router-dom';

const skins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class Switcher extends React.Component {

    constructor(props) {
        super(props);
        this.handleSwitchSkin.bind(this);
        this.state = { stylePath: './assets/css/skin/skin-1.css' };
    }

    componentDidMount = () => {
        var homepage2 = /\/home-factory2/i;
        var homepage3 = /\/home-construction3/i;
        var homepage4 = /\/home-transport/i;
        var homepage5 = /\/home-agriculture/i;
        var homepage6 = /\/home-solar-energy/i;
        var homepage7 = /\/home-oilgas-plant/i;
        var homepage8 = /\/home-page8/i;
        var homepage9 = /\/home-industries9/i;
        var homepage10 = /\/home-factory10/i;
        var homepage11 = /\/home-construction11/i;
        var homepage12 = /\/home-conditioning-repair12/i;

        if (homepage2.test(window.location.href)) {
            this.setState({ stylePath: './assets/css/skin/skin-9.css' });
        } else if (homepage3.test(window.location.href)) {
            this.setState({ stylePath: './assets/css/skin/skin-7.css' });
        } else if (homepage4.test(window.location.href)) {
            this.setState({ stylePath: './assets/css/skin/skin-2.css' });
        } else if (homepage5.test(window.location.href)) {
            this.setState({ stylePath: './assets/css/skin/skin-4.css' });
        } else if (homepage6.test(window.location.href)) {
            this.setState({ stylePath: './assets/css/skin/skin-9.css' });
        } else if (homepage7.test(window.location.href)) {
            this.setState({ stylePath: './assets/css/skin/skin-1.css' });
        } else if (homepage8.test(window.location.href)) {
            this.setState({ stylePath: './assets/css/skin/skin-1.css' });
        } else if (homepage9.test(window.location.href)) {
            this.setState({ stylePath: './assets/css/skin/skin-2.css' });
        } else if (homepage10.test(window.location.href)) {
            this.setState({ stylePath: './assets/css/skin/skin-2.css' });
        } else if (homepage11.test(window.location.href)) {
            this.setState({ stylePath: './assets/css/skin/skin-1.css' });
        } else if (homepage12.test(window.location.href)) {
            this.setState({ stylePath: './assets/css/skin/skin-9.css' });
        } else{
            this.setState({ stylePath: './assets/css/skin/skin-1.css' });
        }
        

    }

    state = { isSwitchActive: false };

    handleSwitchToggle = () => {
        this.setState({ isSwitchActive: !this.state.isSwitchActive });
    };

    handleSwitchSkin = (skinitem) => {
        
        var homepage4 = /\/home-transport/i;
        var homepage7 = /\/home-oilgas-plant/i;
        var homepage8 = /\/home-page8/i;
        var homepage9 = /\/home-industries9/i;
        
        const skin = skinitem.item;

        var logo = '';
        var footerlogo = '';

        if (homepage4.test(window.location.href) || homepage7.test(window.location.href) || homepage8.test(window.location.href) || homepage9.test(window.location.href)) {
            logo = require('./../../images/logo-white.png');
        } else {
            logo = require('./../../images/logo-' + skin + '.png');
        }

        
        footerlogo = require('./../../images/logo-' + skin + '-light.png');
        
        this.props.updateFooterLogo(footerlogo);

        window.updateTopMostParent(logo);

        if (skin === 1) {
            this.setState({ stylePath: './assets/css/skin/skin-1.css' });
        } else if (skin === 2) {
            this.setState({ stylePath: './assets/css/skin/skin-2.css' });
        } else if (skin === 3) {
            this.setState({ stylePath: './assets/css/skin/skin-3.css' });
        } else if (skin === 4) {
            this.setState({ stylePath: './assets/css/skin/skin-4.css' });
        } else if (skin === 5) {
            this.setState({ stylePath: './assets/css/skin/skin-5.css' });
        } else if (skin === 6) {
            this.setState({ stylePath: './assets/css/skin/skin-6.css' });
        } else if (skin === 7) {
            this.setState({ stylePath: './assets/css/skin/skin-7.css' });
        } else if (skin === 8) {
            this.setState({ stylePath: './assets/css/skin/skin-8.css' });
        } else if (skin === 9) {
            this.setState({ stylePath: './assets/css/skin/skin-9.css' });
        } else if (skin === 10) {
            this.setState({ stylePath: './assets/css/skin/skin-10.css' });
        } else if (skin === 11) {
            this.setState({ stylePath: './assets/css/skin/skin-11.css' });
        } else if (skin === 12) {
            this.setState({ stylePath: './assets/css/skin/skin-12.css' });
        }

    };

    render() {
        const isSwitchActive = this.state.isSwitchActive;

        return (
            <>
                <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
            </>
        );
    };
};

export default Switcher;