<template>
    <el-table :data="results" style="width: 100%">
        <el-table-column prop="id" label="Id" width="180"></el-table-column>
        <el-table-column prop="APY" label="APY" width="180"></el-table-column>
        <el-table-column prop="exchange" label="Exchange" width="180"></el-table-column>
        <el-table-column prop="fundingRate" label="FundingRate" width="180"></el-table-column>
        <el-table-column prop="fundingRate_1day_avg" label="FundingRate_1day_avg" width="180"></el-table-column>
        <el-table-column prop="indexPrice" label="IndexPrice" width="180"></el-table-column>
        <el-table-column prop="markPrice" label="MarkPrice" width="180"></el-table-column>
        <el-table-column prop="order" label="Order" width="180"></el-table-column>
        <el-table-column prop="preFundingRate" label="PreFundingRate" width="180"></el-table-column>
        <el-table-column prop="priceGap" label="PriceGap" width="180"></el-table-column>
        <el-table-column prop="spotExchange" label="SpotExchange" width="180"></el-table-column>
        <el-table-column prop="spotPrice" label="SpotPrice" width="180"></el-table-column>
    </el-table>
</template>

<script>
import db from '../firebaseInit'
import { collection, getDocs } from 'firebase/firestore/lite'

export default {
    data() {
        return {
            results: [],
            fields: ['exchange', 'symbol', 'fundingRate']
        }
    },
    methods: {
        async readFilteredResult() {
            const filteredCol = collection(db, 'filtered_result')
            const resultSnapshot = await getDocs(filteredCol)
            const resultList = resultSnapshot.docs.map((doc) => {
                this.results.push({
                            id: doc.id,
                            APY: doc.data().APY,
                            exchange: doc.data().exchange,
                            fundingRate: doc.data().fundingRate,
                            fundingRate_1day_avg: doc.data().fundingRate_1day_avg,
                            indexPrice: doc.data().indexPrice,
                            markPrice: doc.data().markPrice,
                            order: doc.data().order,
                            preFundingRate: doc.data().preFundingRate,
                            priceGap: doc.data().priceGap,
                            spotExchange: doc.data().soptExchange,
                            spotPrice: doc.data().spotPrice,
                        })
            })
            console.log(this.results)
        }
    },
    mounted() {
        this.readFilteredResult()
    }
}
</script>

<style>

</style>