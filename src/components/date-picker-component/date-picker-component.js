import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: 'DatePickerComponent',
  components: {
    DatePicker
  },
  data() {
    return {
      dateToComponent: null,
      selectedDate: null
    };
  },
  methods: {
    onDateSelect(date) {
      this.dateToComponent = date
      const newDate = new Date(date)
      const day = (newDate.getDay() < 10) ? `0${newDate.getDay()}` : newDate.getDay();
      const month = (newDate.getMonth() < 10) ? `0${newDate.getMonth()}` : newDate.getMonth();
      const year = newDate.getFullYear();
      this.selectedDate = `${year}-${month}-${day}`
  }
},
watch: {
  selectedDate: function () {
    this.$emit("seledtedDateEvent", this.selectedDate);
  }
}
}