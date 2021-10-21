class Motorcycle < Vehicle

    has_one :base, class_name: 'Vehicle', as: :details
    validates :wheels, :inclusion => 0..2

    before_save do
        if seat_status.nil? 
            self.seat_status = 'works'
        end
        if wheels.nil?
            self.wheels = 2
        end
    end
end