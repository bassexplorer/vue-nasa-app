// @ is an alias to /src
import NasaComponent from "@/components/nasa-component/nasa-component.vue";
// import DatePickerComponent from '@/components/date-picker-component/date-picker-component.vue';

export default {
  name: "Home",
  components: {
    NasaComponent,
    // DatePickerComponent,
  },
  data: function () {
    return {
      showDesc: false,
    };
  },
};