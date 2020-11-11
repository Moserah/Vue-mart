Vue.component('inventory',{
    template: `
        <div>
            <h1>Shopping List</h1>
            <div class="cart">
                <div class="inventory">
                    <h1>Inventory</h1>
                    <li v-for="item in inventory"> {{ item }} </li>
                </div>
                <div class="cartBox">
                    <h1>Enter Your Items</h1>
                    <div class="InputBox">      
                    <div class="input">              
                        <input type="text" v-model="itemInput" @keyup.enter="saveItem">
                        <span :style="styleObject" @click="clearInput" v-if="itemInput.length > 4">&times;</span>
                    </div>
                        <button @click="saveItem" v-if="itemInput.length > 4">Save</button>
                        <button @click="clearItem" clearcart>Clear</button>
                    </div>
                </div>
            </div>
            <footer>
                <h4>made with Vuejs by UTITOFON</h4>
            </footer>
        </div>
    `,
    data(){
        return{
            itemInput: '',
            inventory: [
                
            ],
            styleObject: {
                position: 'absolute',
                top: '5px',
                right: '10px',
                cursor: 'pointer'
            }
        }
    },
    methods:{
        saveItem() {
            this.inventory.push(this.itemInput),
            this.itemInput = ""
        },
        clearItem() {
            this.inventory = []
        },
        clearInput(){
            this.itemInput = ""
        }
    }
})

const app = new Vue ({
    el: '.container',    
})