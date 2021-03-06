import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Modal extends React.Component {

    constructor(props){
        super(props);
    }

    render () {
        let top = this.props.top || '50%';
        let left = this.props.left || '50%';
        let position = this.props.position || 'fixed';
        let transform = this.props.transform || 'translate(-50%, -50%)';
        let width = this.props.width || '';
        let height= this.props.height || '';
        let transition = this.props.transition || 'transition: all 200ms ease-out';
        let buttonAlign = this.props.buttonAlign || 'right';

        let modalDialogStyle = {    maxWidth: '90%', margin: '0px',
            top: top, position: position, left: left, transform: transform, transition: transition,
            width: width, height: height, maxHeight: '90vh', overflowY: 'scroll' };

        return(
            <div className={`modal-wrapper`}>
                <div className={`modal ${this.props.titleColor ? this.props.titleColor : 'modal-primary'}`} id="modal" tabIndex="-1" role="dialog">
                    <ReactCSSTransitionGroup
                        component='div'
                        transitionAppear={true} transitionAppearTimeout={1000}
                        transitionName={'modal'} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                        <div key={Object.id} className="modal-dialog modal-lg" role="document" style={modalDialogStyle}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button onClick={this.props.hide} className="close">
                                        <span>×</span>
                                    </button>
                                    <h4 className="modal-title uppercase bold" id="modal-sm-primary-label"><i className={`modal-icon fa ${this.props.icon ? this.props.icon : 'fa-cog'}`}/>{this.props.modalTitle}</h4>
                                </div>
                                <div className="modal-body">
                                    {this.props.children}
                                </div>
                                <div className={`modal-footer ${this.props.hideFooter ? 'hide' : ''}`}>
                                    { !this.props.hideCloseBtn &&
                                    <button onClick={this.props.hide} className="btn btn-default btn-rounded">Close</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </ReactCSSTransitionGroup>
                    <div onClick={this.props.hide} className="modal-backdrop fade in"/>
                </div>
            </div>

        );
    }
}

export default Modal;
