function Stats({items}) {
    const itemsCount = items.length
    if (!itemsCount)
        return <footer className={'stats'}>
            <em>
                Start adding some items to your packing list! 🚀
            </em>
        </footer>


    const packedCount = items.reduce((cnt, item) => item.packed === true ? cnt + 1 : cnt, 0)
    return <footer className={'stats'}>
        <em>
            {itemsCount === packedCount ? 'You got everything! Ready to go 🧳' : `💼 You have ${itemsCount} items on your list, and you already
            packed ${packedCount} (${itemsCount ? Math.round(packedCount / itemsCount * 100) : 0}%)`}
        </em>
    </footer>
}

export default Stats