/**
 * Sample React Native Calendar Strip
 * https://github.com/BugiDev/react-native-calendar-strip
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    let startDate = moment(); // today

    // Create a week's worth of custom date styles and marked dates.
    let customDatesStyles = [];
    let markedDates = [];
    for (let i = 0; i < 365; i++) {
      let date = startDate.clone().add(i, 'days');

      customDatesStyles.push({
        startDate: date, // Single date since no endDate provided
        dateNameStyle: { color: '#2A323C' },
        dateNumberStyle: { color: '#2A323C' },
        highlightDateNameStyle: { color: 'white' },
        highlightDateNumberStyle: { color: 'white' }
      });
    }

    this.state = {
      selectedDate: undefined,
      customDatesStyles,
      markedDates,
      startDate,
    };
  }

  onDateSelected = selectedDate => {
    this.setState({ selectedDate });
    this.setState({ formattedDate: selectedDate.format('DD-MM-YYYY') });
  }

  render() {

    let datesWhitelist = [{
      start: moment(),
      end: moment().add(20, 'days')
    }];
    let datesBlacklist = [moment('2021-05-23', 'YYYY-MM-DD'),
                          moment('2021-05-25', 'YYYY-MM-DD'),
                          moment('2021-05-20', 'YYYY-MM-DD')
                        ]; // 1 day disabled
    return (
      <View>
        <CalendarStrip
          scrollable
          calendarColor={'white'}
          style={{ height: 130, paddingTop: 10, paddingBottom: 10 }}
          calendarHeaderStyle={{ color: '#2A323C', fontSize: 20 }}
          iconContainer={{ flex: 0.1 }}
          customDatesStyles={this.state.customDatesStyles}
          markedDates={this.state.markedDates}
          datesWhitelist={datesWhitelist}
          datesBlacklist={datesBlacklist}
          selectedDate={this.state.selectedDate}
          onDateSelected={this.onDateSelected}
          highlightDateContainerStyle={{ backgroundColor: '#4CBDBB' }}
        />
        <Text style={{ fontSize: 24 }}>Data selecionada: {this.state.formattedDate}</Text>
      </View>
    );
  }
}