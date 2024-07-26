var app = new function(){
    this.el= document.getElementById('contacts');
    
    this.contacts=[];



    this.Fetchall = function(){
        var data = '';

        if(this.contacts.length > 0){
            for (i = 0; i < this.contacts.length; i++) {
             data += '<tr>';
             data += '<td>'+(i+1)+". " + this.contacts[i] + '</td>';
             data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
             data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
             data += '</tr>';
            }
        }

        this.Count(this.contacts.length);
        return this.el.innerHTML = data;
    };

    this.Add = function(){
        el = document.getElementById('add-contact');

        var contact = el.value;

        if(contact){

            this.contacts.push(contact.trim());

            el.value='';

            this.Fetchall();
        }
    };

    this.Edit = function(item){
        var el = document.getElementById('edit-contact');

        el.value = this.contacts[item];

        document.getElementById('edit').style.display= 'block';
        self=this;

        document.getElementById('save-edit').onsubmit=function(){
            
            var contact = el.value;

            if(contact){

                self.contacts.splice(item,1, contact.trim());

                self.Fetchall();

                CloseInput();
            }
        }
    };

    this.Delete = function(item){

        this.contacts,splice(item,1);

        this.Fetchall();
    };
    
    this.Count = function(data) {
        var el   = document.getElementById('counter');
        var name = 'Contacts';
    
        if (data) {
            if(data ==1){
                name = 'Contact'
            }
          el.innerHTML = data + ' ' + name ;
        } 
        else {
          el.innerHTML = 'No ' + name;
        }
      };
      
    }

app.Fetchall();

function CloseInput(){
    document.getElementById('edit').style.display = 'none';
}