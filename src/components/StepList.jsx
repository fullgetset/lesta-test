const StepList = ({ items }) => {
  return (
    <div className="step-list">
      <div className="step-list__container">
        {items.map(({ title, number, description }) => (
          <div key={number} className="step-list__content">
            <h3 className="step-list__title">{title}</h3>

            <span className="step-list__number">{number}</span>

            <p className="step-list__description">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepList;
