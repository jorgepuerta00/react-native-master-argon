import _ from 'lodash';
import React, { Component } from 'react';
import { Alert, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ExpandableCalendar, AgendaList, CalendarProvider, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
require("moment/min/locales.min");

// Internationalization
import i18n from '../../i18n';

LocaleConfig.locales['es'] = {
  monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
  monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
  dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
  dayNamesShort: ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'],
  today: 'Hoy'
};

const futureDates = getFutureDates();
const dates = futureDates;

function getFutureDates() {
    const array = [];  
    const date = new Date(); 
    const dateString = moment(date).format('YYYY-MM-DD');
    array.push(dateString);  
    return array;
}

const ITEMS = [
  {title: dates[0], data: [
                            {hour: '12:00 am', duration: '', title: i18n.t('appointment.avaible'), avaible:true},
                            {hour: '01:00 am', duration: '', title: i18n.t('appointment.avaible'), avaible:true},
                            {hour: '02:00 am', duration: '', title: i18n.t('appointment.avaible'), avaible:true},
                            {hour: '03:00 am', duration: '', title: i18n.t('appointment.avaible'), avaible:true},
                            {hour: '04:00 am', duration: '', title: i18n.t('appointment.avaible'), avaible:true},
                            {hour: '05:00 am', duration: '', title: i18n.t('appointment.avaible'), avaible:true},                        
                            {hour: '06:00 am', duration: '', title: i18n.t('appointment.avaible'), avaible:true},
                            {hour: '07:00 am', duration: '', title: i18n.t('appointment.avaible'), avaible:true},
                            {hour: '08:00 am', duration: '', title: i18n.t('appointment.avaible'), avaible:true},
                            {hour: '09:00 am', duration: '', title: i18n.t('appointment.avaible'), avaible:true}, 
                            {hour: '10:00 am', duration: '', title: i18n.t('appointment.avaible'), avaible:true}, 
                            {hour: '11:00 am', duration: '', title: i18n.t('appointment.busy'), avaible:false},
                            {hour: '12:00 pm', duration: '', title: i18n.t('appointment.busy'), avaible:false}, 
                            {hour: '01:00 pm', duration: '', title: i18n.t('appointment.busy'), avaible:false}, 
                            {hour: '02:00 pm', duration: '', title: i18n.t('appointment.busy'), avaible:false},
                            {hour: '03:00 pm', duration: '', title: i18n.t('appointment.busy'), avaible:false}, 
                            {hour: '04:00 pm', duration: '', title: i18n.t('appointment.busy'), avaible:false}, 
                            {hour: '05:00 pm', duration: '', title: i18n.t('appointment.busy'), avaible:false},
                            {hour: '06:00 pm', duration: '', title: i18n.t('appointment.busy'), avaible:false}, 
                            {hour: '07:00 pm', duration: '', title: i18n.t('appointment.busy'), avaible:false}, 
                            {hour: '08:00 pm', duration: '', title: i18n.t('appointment.busy'), avaible:false}, 
                            {hour: '09:00 pm', duration: '', title: i18n.t('appointment.busy'), avaible:false}, 
                            {hour: '10:00 pm', duration: '', title: i18n.t('appointment.avaible'), avaible:true}, 
                            {hour: '11:00 pm', duration: '', title: i18n.t('appointment.avaible'), avaible:true}
                        ]},  
];

export default class Appointment extends Component {

    constructor(props) {
        super(props);
        this.state = {        
            date: '',
        };       

        moment.locale(i18n.currentLocale())

        if(i18n.currentLocale() == 'es'){
          LocaleConfig.defaultLocale = i18n.currentLocale();
        }

    }

  componentDidMount() {
      var that = this;
      var today = new Date();
      that.setState({
        date: moment(today).format('YYYY-MM-DD')
      });
  }

  onDateChanged = (date, updateSource) => {
    var that = this;
    var selectedDate = date;
    that.setState({
      date: moment(selectedDate).format('YYYY-MM-DD')
    });

    ITEMS[0].title = moment(selectedDate).format('YYYY-MM-DD');
  }

  onMonthChange = (/* month, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
  }  

  itemPressed(item) {

    var confirmAppointment = i18n.t('appointment.confirmAppointment');
    var confirmMessage = i18n.t('appointment.confirmMessage').replace("DATE", moment(this.state.date).locale(i18n.currentLocale()).format('dddd, MMMM D')).replace("TIME", item.hour);
    
    Alert.alert(
      confirmAppointment,
      confirmMessage,
        [          
          {
            text: i18n.t('appointment.cancel'),
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: i18n.t('appointment.ok'), onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
  }

  renderEmptyItem(item) {
    return (
        <View style={styles.emptyItem}>
            <View>
                <Text style={styles.emptyHourText}>{item.hour}</Text>
            </View>
            <Text style={styles.emptyTitleText}>{item.title}</Text>  
        </View>
    );
  }

  renderItem = ({item}) => {
    
    var currentTime = moment();
    var startTime = moment(this.state.date + " " + item.hour, "YYYY-MM-DD hh:mm a");
    let isBefore = currentTime.isBefore(startTime);

    if(item.title != i18n.t('appointment.busy')){
      if(isBefore){
        item.title = i18n.t('appointment.avaible')
        item.avaible = true;
      }
      else{
        item.title = i18n.t('appointment.unavaible');
        item.avaible = false;
      }
    }
    
    if(item.avaible){      
        return (
            <TouchableOpacity onPress={() => this.itemPressed(item)} style={styles.itemAvaible}>
                <View>
                    <Text style={styles.itemHourText}>{item.hour}</Text>
                </View>
                <Text style={styles.itemTitleText}>{item.title}</Text>        
            </TouchableOpacity>
        );
    }
    else{
        return this.renderEmptyItem(item);
    }
  }

  getMarkedDates = () => {
    const marked = {};

    let firstDay = moment(moment().year() + "-" + moment().month() + "-01");    
    let now = moment();
    
    while(firstDay.isBefore(now)){      
      marked[firstDay.format('YYYY-MM-DD')] = {marked: false, disabled: true, disableTouchEvent: true};
      firstDay = moment(firstDay).add(1, 'day');
    }

    ITEMS.forEach(item => {
      if (item.data && item.data.length > 0 && !_.isEmpty(item.data[0])) {
        marked[now.format('YYYY-MM-DD')] = {marked: true, disabled: false, disableTouchEvent: false};
      }
    });
    return marked;
  }

  render() {    
    return (
      <CalendarProvider
        date={this.state.date} 
        onDateChanged={this.onDateChanged} 
        onMonthChange={this.onMonthChange}
        theme={{todayButtonTextColor: '#0059ff'}} 
        showTodayButton 
        disabledOpacity={0.6}>
        <ExpandableCalendar 
          firstDay={1}           
          pastScrollRange={0} 
          futureScrollRange={2} 
          markedDates={this.getMarkedDates()}/>
        <AgendaList 
            sections={ITEMS} 
            extraData={this.state} 
            renderItem={this.renderItem}             
            sectionStyle={styles.section}/>
      </CalendarProvider>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#f0f4f7', 
    color: '#79838a'
  },
  itemAvaible: {
    padding: 20, 
    backgroundColor: 'white', 
    borderBottomWidth: 1, 
    borderBottomColor: '#e8ecf0', 
    flexDirection: 'row',
    tintColor: '#1BB616'
  },
  emptyItem: {
    padding: 20,        
    borderBottomWidth: 1, 
    borderBottomColor: '#e8ecf0',
    flexDirection: 'row',
  },
  itemHourText: {
    color: 'black'
  },
  emptyHourText: {
    color: '#79838a',
    fontSize: 14,
  },
  itemTitleText: {
    color: '#5ACC12', 
    marginLeft: 16, 
    fontWeight: 'bold', 
    fontSize: 16
  },
  emptyTitleText: {
    color: '#79838a',
    marginLeft: 16, 
    fontSize: 14,
  }
});