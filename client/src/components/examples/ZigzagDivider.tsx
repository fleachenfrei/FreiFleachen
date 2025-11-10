import ZigzagDivider from '../ZigzagDivider';

export default function ZigzagDividerExample() {
  return (
    <div className="space-y-8">
      <div className="bg-primary p-12 relative">
        <p className="text-white text-center">Blue Section</p>
        <div className="absolute bottom-0 left-0 right-0">
          <ZigzagDivider color="white" position="bottom" />
        </div>
      </div>

      <div className="bg-white p-12">
        <p className="text-center">White Section</p>
      </div>

      <div className="bg-card p-12 relative">
        <div className="absolute top-0 left-0 right-0">
          <ZigzagDivider color="#f9fafb" position="top" />
        </div>
        <p className="text-center mt-8">Card Background Section</p>
        <div className="absolute bottom-0 left-0 right-0">
          <ZigzagDivider color="white" position="bottom" />
        </div>
      </div>
    </div>
  );
}
