class Sedan < ApplicationRecord
    validates :doors, :inclusion => 0..4

    has_one :base, class_name: 'Vehicle', as: :details

    before_save do
        if doors.nil? 
            self.doors = 4
        end
        if wheels.nil? 
            self.wheels = 4
        end
    end
end