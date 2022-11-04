import React from 'react'

const HourSelector = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement>) => {
    return (
        <select 
            className='h-[36px] border rounded font-medium pb-[3px]'
            {...props}
        >
            <option>00</option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>29</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
        </select>
    )
}

export default HourSelector;