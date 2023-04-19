import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuePugPlugin from 'vue-pug-plugin'


// https://vitejs.dev/config/
export default defineConfig({
  //base : '/pepecity/',
  plugins: [vue(
    {
      template: {
        preprocessOptions: { // 'preprocessOptions' is passed through to the pug compiler 
          plugins: [
            vuePugPlugin
          ]
        }
      }
    }
  )],
  define : {
    global: "window",
  }
})
