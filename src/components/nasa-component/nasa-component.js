// import axios from 'axios';
import SpinnerComponent from '../loading-spinner-component/loading-spinner-component.vue';
import instance from '../../services/nasa-api-service';
import DatePickerComponent from '@/components/date-picker-component/date-picker-component.vue';

export default {

  name: 'NasaComponent',
  props: {
    showDesc: Boolean
  },
  components: {
    SpinnerComponent,
    DatePickerComponent
  },
  data() {
    return {
      ApiObj: {},
      loading: true,
      onError: false,
      dateSelected: '',
    }
  },
  methods: {
    getDailyPost(date) {
      this.loading = true,
      this.onError = false
      instance.get('',{
        params: {
          date: date
        }
      }).
      then(response => {
          this.ApiObj = response.data
        }).catch(error => {
          console.log(error)
          this.onError = true
        })
        .finally(() => {
              this.loading = false 
        })
    },
    selectedDateOutput (date) {
      this.dateSelected = date;

      this.getDailyPost(date);
    }
  },

  created() {
    this.getDailyPost()
  },
}