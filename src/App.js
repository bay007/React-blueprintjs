import React, { Component } from 'react';
import {Intent, Toaster, Position, PopoverInteractionKind, Popover, Alert, Classes, Button, Collapse, Dialog, IconClasses, EditableText, Checkbox, Switch, RadioGroup, Radio} from '@blueprintjs/core';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      alertIsOpen:false,
      collapseIsOpen:false,
      dialogIsOpen:false,
      isCheckboxCheked:false,
      radioGroupselectedValue:null,
      
    }
    this.alertDialog=this.alertDialog.bind(this);
    this.AcceptcloseAlert=this.AcceptcloseAlert.bind(this);
    this.CancelcloseAlert=this.CancelcloseAlert.bind(this);
    this.collapseOpenClose=this.collapseOpenClose.bind(this);
    this.openDialog=this.openDialog.bind(this);
    this.onCloseDialog=this.onCloseDialog.bind(this);
    this.onConfirmEditableText=this.onConfirmEditableText.bind(this);
    this.onChangeCheckbox=this.onChangeCheckbox.bind(this);
    this.onChangeSwitch=this.onChangeSwitch.bind(this);
    this.onChangeRadioGroup=this.onChangeRadioGroup.bind(this);

  }

refHandlers = {
  toaster: (ref) => {this.toaster = ref}
}

onChangeRadioGroup=(FormEvent)=>{
  this.setState({radioGroupselectedValue:FormEvent.target.value})
  this.toaster.show({message:"RadioGroup: "+FormEvent.target.value})
}

onChangeSwitch=(FormEvent)=>{
  this.toaster.show({message:"SWITCH: "+ FormEvent.target.checked})
}

onChangeCheckbox=(FormEvent)=>{
  this.toaster.show({message:"CHECKBOX: "+ FormEvent.target.checked})
  this.setState({isCheckboxCheked:!this.state.isCheckboxCheked})
}

onConfirmEditableText=(string)=>{
  console.log(string);
  this.toaster.show({message:string})
}

openDialog=()=>{
  this.setState({dialogIsOpen:true})
}

onCloseDialog=()=>{
  this.setState({dialogIsOpen:!this.state.dialogIsOpen})
  console.log("Cerrado")
}

collapseOpenClose=()=>{
  this.setState( {collapseIsOpen:!this.state.collapseIsOpen} )
}

alertDialog=()=>{
  this.setState({alertIsOpen:true})
  console.log(Classes)
  console.log(IconClasses)
}


AcceptcloseAlert=()=>{
  this.setState({alertIsOpen:false})
  alert("Aceptado")
}

CancelcloseAlert=()=>{
  this.setState({alertIsOpen:false})
  alert("Cancelado")
}

  render() {


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className={Classes.ELEVATION_3}> {/*http://blueprintjs.com/docs/#core/components/card */}
        <p><Button iconName="refresh"  active="true" text="Refresh Activitys" onClick={this.alertDialog} /></p>
        
          <Alert  //http://blueprintjs.com/docs/#core/components/alert
            isOpen={this.state.alertIsOpen}
            cancelButtonText="¿Cancelar la operación?"
            confirmButtonText="Proceder?"
            iconName={IconClasses.COMPARISON}
            onCancel={this.CancelcloseAlert}
            onConfirm={this.AcceptcloseAlert}
            className="pt-callout pt-icon-info-sign" //*http://blueprintjs.com/docs/#core/components/callout
          >
            <p>
                Couldn't create the file because the containing folder doesn't exist anymore.
                You will be redirected to your user folder.
            </p>
          </Alert>

          <Button onClick={this.collapseOpenClose} text="Mostrar logs" iconName="pt-icon-collapse-all"/>
          <Collapse isOpen={this.state.collapseIsOpen}>{/*http://blueprintjs.com/docs/#core/components/collapse*/}
              <p>[11:53:30] Finished 'typescript-bundle-blueprint' after 769 ms</p>
              <p>[11:53:30] Starting 'typescript-typings-blueprint'...</p>
              <p>[11:53:30] Finished 'typescript-typings-blueprint' after 198 ms</p>
              <p>[11:53:30] write ./blueprint.css</p>
              <p>[11:53:30] Finished 'sass-compile-blueprint' after 2.84 s</p>
          </Collapse>
          <hr/>
        <p>
          <Button 
          active
          text="Mostrar <Dialog/>"
          onClick={this.openDialog}
          />
          <Dialog /* http://blueprintjs.com/docs/#core/components/dialog */
            canEscapeKeyClose={true}
            canOutsideClickClose={true}
            iconName={IconClasses.AIRPLANE}
            isOpen={this.state.dialogIsOpen}
            transitionDuration={150}
            title="Este es el title de el dialogo"
            onClose={this.onCloseDialog}
            isCloseButtonShown={true}
            inline={false}
          > 
            <p>[11:53:30] Finished 'typescript-bundle-blueprint' after 769 ms</p>
            <p>[11:53:30] Starting 'typescript-typings-blueprint'...</p>
            <p>[11:53:30] Finished 'typescript-typings-blueprint' after 198 ms</p>
            <p>[11:53:30] write ./blueprint.css</p>
            <p>[11:53:30] Finished 'sass-compile-blueprint' after 2.84 s</p>
          </Dialog>
        </p>
        
        
          <EditableText /*http://blueprintjs.com/docs/#core/components/editable-text*/
            defaultValue="Hola"
            maxLength={140}
            minLines={2}
            maxLines={4}
            multiline={true}
            onConfirm={this.onConfirmEditableText}
            placeholder="Ingrese sus peticiones"
            confirmOnEnterKey={true}
          >
          </EditableText>
        <hr/>        
        <p>
          <Checkbox /* http://blueprintjs.com/docs/#core/components/forms/checkbox */
            disabled={false}
            label="Estudio grabacion"
            /*defaultChecked={true}*/
            checked={this.state.isCheckboxCheked}
            onChange={this.onChangeCheckbox}
          />
        </p>
        <hr/>
        
          <Switch 
            onChange={this.onChangeSwitch}
            label="Este es un Switch"
            className={Classes.LARGE&&Classes.ALIGN_LEFT}
          />
        

        <hr/>
          <Popover /* http://blueprintjs.com/docs/#core/components/popover */
            content="contenido de <Popover/>"
            interactionKind={PopoverInteractionKind.HOVER}
            useSmartPositioning={false}
            position={Position.LEFT}
          >
            <RadioGroup 
            label="Parque de diversiones" 
            selectedValue={this.state.radioGroupselectedValue}
            onChange={this.onChangeRadioGroup}
            >
              <Radio label="Disney Landia" value="1"/>
              <Radio label="Six Flags" value="2"/>
              <Radio label="Orlando" value="3"/>
              <Radio label="Museo del espía" value="4"/>
            </RadioGroup>
          </Popover>
        <hr/>
        
        <Toaster /* http://blueprintjs.com/docs/#core/components/toast */
        timeout={100} 
        iconName={IconClasses.CHAT} 
        ref={this.refHandlers.toaster}
        position={Position.TOP_RIGHT}
        intent={Intent.PRIMARY}
        canEscapeKeyClear={true}
        button="Procure toast"
        />
        </div>
      </div>
    );
  }
}

export default App;