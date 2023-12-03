class Message {
    constructor(id, sender_name, role, message) {
      this._id = id;
      this._sender_name = sender_name;
      this._role = role;
      this._message = message;
      this._date = new Date(); // Automatically set to the current date and time
    }
  
    get id() {
      return this._id;
    }
  
    get sender_name() {
      return this._sender_name;
    }
  
    get role() {
      return this._role;
    }
  
    get message() {
      return this._message;
    }
  
    get date() {
      return this._date;
    }
  
    // Setter for message (optional)
    set message(newMessage) {
      this._message = newMessage;
    }
  
    formatDateTime() {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
      return this._date.toLocaleString(undefined, options);
    }
}
  
export default Message;
  