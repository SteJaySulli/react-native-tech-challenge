import Slider from '@react-native-community/slider';
import DropDownPicker from 'react-native-dropdown-picker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import filterAndCollateData, { getMaximalSpend, getMinimalSpend } from './data';
import { LineChart } from 'react-native-chart-kit';

const REGIONS = [
  "United States",
  "Europe",
  "APAC",
  "Latin America"
];

const GENDERS = [
  "Male",
  "Female"
];

const regionItems = [{ label: "All Regions", value: null }, ...REGIONS.map(region => ({ label: region, value: region }))];

console.log(regionItems);

export default function App() {
  const [minimalSpend, setMinimalSpend] = useState(getMinimalSpend());
  const [region, setRegion] = useState(null);
  const [regionOpen, setRegionOpen] = useState(false);
  const [gender, setGender] = useState(null);

  const data = filterAndCollateData(minimalSpend, region, gender);

  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        <View style={styles.filter}>
          <View style={styles.horizontal}>
            <Text style={{ flex: 1 }}>Minimal Spend</Text>
            <Text>${minimalSpend}</Text>
          </View>
          <Slider
            minimumValue={getMinimalSpend()}
            maximumValue={getMaximalSpend()}
            value={minimalSpend}
            onValueChange={(value) => setMinimalSpend(value)}
            step={100}
          />
        </View>
        <View style={styles.filter}>
          <Text>Region</Text>
          <DropDownPicker
            open={regionOpen}
            value={region}
            setOpen={setRegionOpen}
            setValue={setRegion}
            items={regionItems}
            placeholder="All Regions"
            listMode='MODAL'
          />
        </View>
        <View style={styles.filter}>
          <Text>Gender</Text>
          <View style={styles.horizontal}>
            <TouchableOpacity style={gender == null ? styles.buttonOn : styles.buttonOff} onPress={() => setGender(null)}>
              <Text style={{ color: "#fff" }}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={gender == "Male" ? styles.buttonOn : styles.buttonOff} onPress={() => setGender("Male")}>
              <Text style={{ color: "#fff" }}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity style={gender == "Female" ? styles.buttonOn : styles.buttonOff} onPress={() => setGender("Female")}>
              <Text style={{ color: "#fff" }}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.graph}>
        <LineChart
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            datasets: data
          }}
          width={Dimensions.get('window').width}
          height={200}
          yAxisLabel={'$'}
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#eee',
            color: (opacity = 3) => `rgba(0, 0, 0, ${opacity})`
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 32,
    width: "100%"
  },
  filters: {
    flexDirection: "row",
    backgroundColor: '#eee',
    alignItems: "stretch",
    justifyContent: "flex-start",
    width: "100%"
  },
  filter: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: "stretch",
    justifyContent: "flex-start",
    width: "100%",
    padding: 8
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  buttonOn: {
    backgroundColor: "#04f",
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#fff",
    borderWidth: 1
  },
  buttonOff: {
    backgroundColor: "#999",
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#fff",
    borderWidth: 1
  },
  graph: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 32,
    paddingBottom: 32,
    width: "100%"
  }
});
