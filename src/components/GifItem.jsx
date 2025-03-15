const GifItem = ({title, img, id}) => {
    console.log({title, img, id});
    return (
        <div className="card">
            <img src={img} alt={title}/>
            <p>{title}</p>
        </div>
    );
};

export default GifItem;