import { EventBus } from '@/utils/event-bus';

export default {
  methods: {
    sendSnackbarMsg(color, msg) {
      EventBus.$emit('show-snack', color, msg);
    }
  },
}