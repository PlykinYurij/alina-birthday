import { Button } from '../ui';
import axios from 'axios';
const API_URL = 'https://script.google.com/macros/s/AKfycbxTDnlyRiDlRbaGT5rTo8n1RFgfEKJ3j0XlzFDWItwSOhH8E8S9iB4_4FpqyNbPR-cD7Q/exec'
export const Question = () => {

  const sendForm = async () => {
    try {
      const data = await axios.post(API_URL, {
        fullName: 'fffff',
        confirmed: 'true',
        alcohol: 'vodka'
      })

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Button onClick={sendForm}>send</Button>
    </div>
  );
};