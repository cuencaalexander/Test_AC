class Coupe < Vehicle

    validates :doors, :inclusion => 0..2

    has_one :base, class_name: 'Vehicle', as: :details

    before_save do
        if doors.nil? 
            self.doors = 2
        end
        if wheels.nil?
            self.wheels = 4
        end
    end
end