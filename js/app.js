Vue.component('inventory',{
    template: `
        <div>
            <h1>VUE Mart</h1>
            <div class="cart">
                <div class="inventory">
                    <h1>Inventory</h1>
                    <li v-for="item in inventory"> {{ item }} </li>
                </div>
                <div class="cartBox">
                    <h1>Enter Your Items</h1>
                    <div class="InputBox">
                        <input type="text" v-model="itemInput" @keyup.enter="saveItem">
                        <button @click="saveItem">Save</button>
                        <button @click="clearItem">Clear</button>
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
                'Medium Sized Cup'
            ]
        }
    },
    computed: {
        
    },
    methods:{
        saveItem() {
            this.inventory.push(this.itemInput),
                this.itemInput = ""
        },
        clearItem() {
            this.inventory = "",
            this.itemInput = ''
        }
    }
})

const app = new Vue ({
    el: '.container',
    
})